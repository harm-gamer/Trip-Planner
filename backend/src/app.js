import express from 'express';
import dotenv from 'dotenv';
import tripRoutes from "./route/tripRoutes.js"
const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/trip',tripRoutes);
app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
   
})

