import express from "express";
import db from "../utils/db.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { id } = req.body;
        const [patient_data] = await db.execute("SELECT * FROM patients WHERE user_id = ?", [id]);
        if (patient_data.length === 0) {
            return res.status(404).json({ message: "Patient not found" });
        }

        const [appointment] = await db.execute("SELECT * FROM appointments WHERE patient_id = ?", [patient_data[0].id]);
        if(appointment.length === 0){
            return res.status(201).json({message : "No medical record found"});
        }

        const [diagnosesHistory] = await db.execute("SELECT * FROM diagnoses WHERE patient_id = ?", [patient_data[0].id]);
        const [treatmentHistory] = await db.execute("SELECT * FROM treatments WHERE patient_id = ?", [patient_data[0].id]);

        const [doctor] = await db.execute("SELECT * FROM doctors WHERE id = ?", [appointment[0].doctor_id]);
        if (doctor.length === 0) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        const details = {
            patient: patient_data[0].full_name,
            dob: patient_data[0].date_of_birth,
            gender: patient_data[0].gender,
            address: patient_data[0].address,
            phone: patient_data[0].phone_number,
            doctor: doctor[0].full_name,
            date: appointment[appointment.length -1]?.appointment_date || '---',
            status: appointment[appointment.length -1]?.status || '---',
            diagnosis: diagnosesHistory || '---',
            treatment: treatmentHistory || '---',
            appointment_date : appointment[0]?.appointment_date || '---',
        };
        res.json(details);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;