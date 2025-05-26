import express from 'express';
import dotenv from 'dotenv';
import tripRoutes from "./route/tripRoutes.js"
import mongoose from 'mongoose'
// import userRoute from "./route/userRoute.js"
const app = express();
dotenv.config();


app.use(express.json());
// app.use('/api/user',userRoute);
async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}
connectDB();
app.use('/api/trip',tripRoutes);
console.log(process.env.GOOGLE_MAPS_API_KEY);

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
   
})

