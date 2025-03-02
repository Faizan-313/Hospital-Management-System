import express from "express";
import { loginUser, registerUser,getUser,registerDoctor } from "../controller/authController.js";
import { authenticateToken } from "../controller/authenticateToken.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/register-doctor", registerDoctor);
router.get('/me', authenticateToken,getUser);

export default router;
