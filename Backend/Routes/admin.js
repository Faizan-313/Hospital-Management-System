import express from "express"
import { getAllPatientsData } from "../controller/adminDashboard.js"

const router = express.Router()

router.get("/patient-list",getAllPatientsData)

export default router