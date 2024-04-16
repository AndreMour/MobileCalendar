import express from "express";
import { getUsers, addUser, deleteUser, saveTeams, getTeams } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/getTeams", getTeams);

router.post("/add", addUser);

router.post("/saveTeams", saveTeams);

router.delete("/:id", deleteUser);

export default router;