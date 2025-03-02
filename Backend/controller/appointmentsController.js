import db from "../utils/db.js";

export const appointment = async (req, res) => {
    const { user_id } = req.body;
    try {
        //get doctor email
        const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [
            user_id,
        ]);
        if (!user || user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        //get doctor id
        const [doctor] = await db.execute(
            "SELECT * FROM doctors WHERE contact_info = ?",
            [user[0].email]
        );
        if (!doctor || doctor.length === 0) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        // get appointments
        const [appointments] = await db.execute(
            "SELECT * FROM appointments WHERE doctor_id = ?", 
            [doctor[0].id]
        );

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        const details = await Promise.all(
            appointments.map(async (appointment) => {
            const [rows] = await db.execute(
                "SELECT * FROM patients WHERE id = ?", 
                [appointment.patient_id]
            );
            const patientName = rows[0].full_name;
            const patient_id = rows[0].id;
            return {
                id: appointment.id, 
                patient_id,
                patientName,
                date:  new Date(appointment.appointment_date).toLocaleDateString(undefined, options),
                status: appointment.status,
            };
            })
        );
            
        
        res.status(200).send(details);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching data from DB" });
    }
};
