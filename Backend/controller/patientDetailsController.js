import db from "../utils/db";

export const getPatientDetails = async (req, res) => {
    try {
        const { id } = req.body;
        const [patient_data] = await db.execute("SELECT * FROM patients WHERE user_id = ?", [id]);

        if (patient_data.length === 0) {
            return res.status(404).json({ message: "Patient not found" });
        }

        const [appointment] = await db.execute("SELECT * FROM appointments WHERE patient_id = ?", [patient_data[0].id]);
        if (appointment.length === 0) {
            return res.status(404).json({ message: "No appointment found" });
        }

        const [medicalHistory] = await db.execute("SELECT * FROM medical_history WHERE appointment_id = ?", [appointment[0].id]);
        if (medicalHistory.length === 0) {
            return res.status(404).json({ message: "No medical history found" });
        }

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
            date: appointment[0].appointment_date,
            status: appointment[0].status,
            diagnosis: medicalHistory[0].diagnosis,
            treatment: medicalHistory[0].treatment
        };
        res.json(details);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};