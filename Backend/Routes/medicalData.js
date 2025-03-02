import express from "express"
import { getMedicalData } from "../controller/medicalDataController.js";

const route = express.Router();

route.post('/medicalData', getMedicalData);

export default route;