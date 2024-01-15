import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.delete("/:userId", deleteUser);


export default router;
