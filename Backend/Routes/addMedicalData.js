import express from "express";
import { add_diagnosis_data } from "../controller/addDiagnosis.js";
import { add_treatment_data } from "../controller/addTreatment.js";

const router = express.Router();

router.post("/add-diagnosis",add_diagnosis_data);
router.post("/add-treatment",add_treatment_data);

export default router