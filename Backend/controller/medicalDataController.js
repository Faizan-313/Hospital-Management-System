import db from "../utils/db.js";

export const getMedicalData = async (req,res)=>{
    const {patient_id} = req.body;

    try{
        const [patient] = await db.execute(
            "select * from patients where id = ?",[patient_id]
        )

        const [diagnoses] = await db.execute(
            "select * from diagnoses where patient_id = ?",[patient_id]
        )

        const [treatments] = await db.execute(
            "select * from treatments where patient_id = ?",[patient_id]
        )

        const [status] = await db.execute(
            "select * from appointments where patient_id = ?",[patient_id]
        )

        const details = {
            patientName : patient[0].full_name.toUpperCase(),
            patient_dob : patient[0].date_of_birth,
            patientGender : patient[0].gender,
            patientDiagnosis : diagnoses || '---no data---',
            patientTreatment : treatments || '---no data---',
            status: status[0].status
        }

        res.status(200).json(details);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Error fetching data from DB" });
    }
}