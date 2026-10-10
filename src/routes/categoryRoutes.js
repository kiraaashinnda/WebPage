import { Router } from "express";
import { getAllCategories, getCatID, createCat, updateCat, deleteCat } from "../controllers/CategoryController.js";

const catrouter = Router()

catrouter.get("/", getAllCategories)
catrouter.get("/:id", getCatID)
catrouter.post("/", createCat)
catrouter.put("/:id", updateCat)
catrouter.delete("/:id", deleteCat)

export default catrouter;