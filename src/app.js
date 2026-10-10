import cors from "cors"
import express from "express"
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import catRoutes from "./routes/categoryRoutes.js"
import pro from "./routes/proRo.js";

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/category", catRoutes)
app.use("/api/p", pro)

app.get("/", (req, res) => {
  res.json({message: "Wir lagi blajar gweh"});
});

export default app