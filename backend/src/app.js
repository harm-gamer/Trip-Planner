import express from 'express';
import dotenv from 'dotenv';
import tripRoutes from "./route/tripRoutes.js"
// import userRoute from "./route/userRoute.js"
const app = express();
dotenv.config();


app.use(express.json());
// app.use('/api/user',userRoute);
app.use('/api/trip',tripRoutes);
console.log(process.env.GOOGLE_MAPS_API_KEY);
app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
   
})

