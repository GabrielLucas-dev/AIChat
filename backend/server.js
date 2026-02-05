import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
 
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();



const port = process.env.SERVER_PORT;
app.listen(port, ()=> console.log(`Rodando na porta ${port}`));