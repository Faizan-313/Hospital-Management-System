import db from "./db.js";
import corn from "node-cron"

const update = corn.schedule("0 0 * * *",async ()=>{
    await db.execute(`
        UPDATE appointments 
        SET status = 'completed' 
        WHERE status = 'scheduled' AND appointment_date < NOW();
    `);
    console.log("Appointments updated successfully!");
});

export default update;