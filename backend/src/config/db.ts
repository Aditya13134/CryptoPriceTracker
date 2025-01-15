import mongoose from 'mongoose';

const uri = "";

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1);
    }
};
