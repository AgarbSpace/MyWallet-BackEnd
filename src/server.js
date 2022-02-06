import express from "express";
import cors from "cors";
import dayjs from 'dayjs';
import router from "./routes/index.js"

dayjs().format()
const server = express();
server.use(express.json());
server.use(cors());

server.use(router);



server.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));