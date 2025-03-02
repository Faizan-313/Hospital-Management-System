import db from "../utils/db.js";

export const add_treatment_data = async (req, res)=>{
    const {patient_id, treatment_text, date} = req.body;
    try{
        const response = await db.execute(
            "insert into treatments (patient_id,treatment_date,treatment_text) values (?,?,?)",
            [patient_id,date,treatment_text]
        )
        res.status(200).json({message : 'done'})

    }catch(error){
        console.log(error);
        res.status(500).json({message : "something went wrong while retreving data from db"})
    }
}