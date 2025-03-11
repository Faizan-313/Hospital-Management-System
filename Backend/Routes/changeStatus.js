import express from "express"
import db from "../utils/db.js"

const router = express.Router();

router.post('/mark-completed',async (req, res)=>{
    const {patient_id} = req.body
    try{
        await db.execute(`
            update appointments set status = 'completed'
            where patient_id = ?
        `,[patient_id]);

        res.status(200).json({message: "Updated the status"});

    }catch(err){
        res.status(500).json({message : "server side error"})
    }
})

export default router