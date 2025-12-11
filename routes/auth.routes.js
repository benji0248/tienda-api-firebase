import express from "express";
import authController from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", authController.login.bind(authController));

router.get(
  "/verify",
  authenticateToken,
  authController.verifyToken.bind(authController)
);

export default router;
