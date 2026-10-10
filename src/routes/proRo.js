import { Router } from "express";
import { getAllPro, getProID } from "../controllers/proCo.js";

const pro = Router()

pro.get("/", getAllPro)
pro.get("/:id", getProID)
// pro.post("/", )
// pro.put("/:id", )
// pro.delete("/:id", )

export default pro;