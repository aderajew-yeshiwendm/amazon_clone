import express from "express";
import authRouter from "./routes/auth.js";
const app = express();
app.use(express.json())
app.use(authRouter);
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})