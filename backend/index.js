import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173', process.env.VITE_FRONTEND_URL],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);


app.listen(PORT, ()=>{
    
    console.log("Server is running on port " + PORT);
})