import { Router } from "express";
import { createP, delP, getAllPro, getProID, upP } from "../controllers/proCo.js";

const pro = Router()

pro.get("/", getAllPro)
pro.get("/:id", getProID)
pro.post("/", createP)
pro.put("/:id", upP)
pro.delete("/:id", delP)

export default pro;