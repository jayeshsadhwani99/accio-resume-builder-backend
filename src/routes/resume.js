import { Router } from "express";
import { handleResume } from "../controllers/resume.js";

export const router = Router();

router.route("/").get(handleResume);
