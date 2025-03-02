import express from "express";
import { appointment } from "../controller/appointmentsController.js";

const route = express.Router();

route.post('/doctor-appointments',appointment);

export default route;