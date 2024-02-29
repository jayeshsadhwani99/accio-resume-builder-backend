import { Router } from "express";
import {
  addResumeData,
  getResumeById,
  handleResume,
} from "../controllers/resume.js";

export const router = Router();

router.route("/").get(handleResume).post(addResumeData);

// Dynamic routes using :variableName
// in express
router.route("/:id").get(getResumeById);
