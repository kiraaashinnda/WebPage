import cors from "cors"
import express from "express"
import authRoutes from "./routes/authRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
  res.json({message: "Wir lagi blajar gweh"});
});

export default app