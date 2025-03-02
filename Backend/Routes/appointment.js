import express from "express";
import db from "../utils/db.js";

const router = express.Router();

router.post('/',  async (req, res)=>{
    const {user_id, doctor_id, date, status} = req.body;

    const [user_data] = await db.execute("select * from patients where user_id = ?",[user_id]);
    const patient_id = user_data[0].id;

    //check for already appointment taken
    const [present] =  await db.execute("select * from appointments where patient_id = ?", [patient_id]);
    if (present.length > 0) {
        return res.status(202).json({ message: "already added" });
    }

    try{
        await db.execute("INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?,?,?,?)",
            [patient_id, doctor_id, date, status]
        );
        res.status(200).json({ message: "Appointment added" });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    };
});

export default router