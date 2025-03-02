import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import authRoutes from './Routes/auth.js';
import medicalHistoryRoutes from './Routes/medicalHistory.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from "cors";
import db from './utils/db.js';
import appointmentRoute from './Routes/appointment.js'
import doctorAppointmentRoute from './Routes/doctorAppointment.js'
import medicalDataRoute from './Routes/medicalData.js'
import addMedicalDataRoute from './Routes/addMedicalData.js'
import adminDashboardRoute from './Routes/admin.js'

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173",  
    credentials: true 
}));

app.use(bodyParser.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'Frontend')));
app.use(express.static(path.join(__dirname, '/Frontend')));

app.use("/api/auth", authRoutes);

//admin dashboard
app.use("/admin",adminDashboardRoute);

app.use("/doctors",async (req,res)=>{
    const [doctors] = await db.execute("SELECT * FROM doctors");
    res.send(doctors);
})

//patient medical history to show on patients dashboard
app.use('/api/medicalhistory', medicalHistoryRoutes);

//patient medical data to show on doctor dashboard
app.use('/api',medicalDataRoute);

//add new medical data
app.use('/api',addMedicalDataRoute);

app.use('/api/book-appointment',appointmentRoute);
app.use('/api',doctorAppointmentRoute);

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
});