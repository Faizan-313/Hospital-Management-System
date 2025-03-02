import db from "../utils/db.js";

export const getAllPatientsData = async (req,res)=>{
    try{
        const [patientDetails] = await db.execute(
            "select p.full_name AS patient_name, d.full_name AS doctor_name, a.appointment_date, a.status from appointments a join patients p on a.patient_id = p.id JOIN doctors d ON a.doctor_id = d.id;"
        )
        res.status(200).send(patientDetails);

    }catch(error){
        console.log(error);
        res.status(404).json({message: "something went wrong"})
    }
}