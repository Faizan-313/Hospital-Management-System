import db from "../utils/db.js";

export const add_diagnosis_data = async (req, res)=>{
    const {patient_id, diagnosis_text, date} = req.body;
    try{
        const response = await db.execute(
            "insert into diagnoses (patient_id,diagnosis_date,diagnosis_text) values (?,?,?)",
            [patient_id,date,diagnosis_text]
        )
        res.status(200).json({message : 'done'})

    }catch(error){
        console.log(error);
        res.status(500).json({message : "something went wrong while retreving data from db"})
    }
}

