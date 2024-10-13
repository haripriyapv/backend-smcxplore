import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());

app.use(express.json()); // to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.get("/", (req, res) => {
res.send("hello world!!!11");
}); 


app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`server Running on port ${PORT}`);
});
