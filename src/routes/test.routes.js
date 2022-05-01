import express from "express";
import {
    test
} from "../controllers/test.controller.js";

const {Router} = express;

const router = Router();

// Routes
router.get("/", test);

export default router;