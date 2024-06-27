import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const DBConnection = async () =>{
    const MONGO_URI  = `mongodb+srv://user1:mongodb@drop-mate.rrfxpny.mongodb.net/?retryWrites=true&w=majority&appName=Drop-Mate`;
    try{
await mongoose.connect(MONGO_URI , {useNewUrlParser: true});
console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}
export default DBConnection;