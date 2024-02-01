import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import recipeRouter from "./recipeRoutes.js";
 
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
dotenv.config()

app.use("/", recipeRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});