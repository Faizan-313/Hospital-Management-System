import bcrypt from "bcrypt";
import db from "../utils/db.js";
import env from "dotenv";
import jwt from "jsonwebtoken";

env.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

export const getUser = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const [rows] = await db.execute("SELECT id, email, role FROM users WHERE id = ?", [decoded.id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user: rows[0] });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

export const registerUser = async (req, res) => {
    const { fullName, dob, gender,phone, address, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, saltRounds);
        const role = "patient";
        const userResult = await db.execute(
            "INSERT INTO users (email, password,role) VALUES (?, ?,?)", 
            [email, hash,role]
        );
        const userId = userResult[0].insertId;

        await db.execute(
            "INSERT INTO patients (user_id, full_name, date_of_birth, gender, phone_number, address) VALUES (?, ?, ?, ?, ?, ?)",
            [userId, fullName, dob, gender, phone, address]
        );

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user" });
    }
};

export const registerDoctor = async (req,res)=>{
    const {fullName,specialization,email,password} = req.body;
    
    try{
        const hash = await bcrypt.hash(password,saltRounds);
        const role = "doctor";
        await db.execute(
            "INSERT INTO users (email,password,role) VALUES (?,?,?)",
            [email,hash,role]
        );

        await db.execute(
            "INSERT INTO doctors (full_name,specialization,contact_info) VALUES (?,?,?)",
            [fullName,specialization,email]
        );

        res.status(201).json({ message: "User registered successfully" });
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error registering doctor"});
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // For admin login
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ id: 0, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "12h" });

        res.cookie("token", token, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", 
            maxAge: 60 * 60 * 1000 * 12, 
        });

        return res.status(200).json({ message: "Login successful", role: "admin", id: 0 });
    }

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "12h" });

        res.cookie("token", token, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", 
            maxAge: 60 * 60 * 1000 * 12, 
        });

        delete user.password;
        res.status(200).json({ message: "Login successful", role: user.role, id: user.id });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Error logging in" });
    }
};



