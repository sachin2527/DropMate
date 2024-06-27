import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const DBConnection = async () =>{
    const MONGO_URI  = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-uonkmme-shard-00-00.rrfxpny.mongodb.net:27017,ac-uonkmme-shard-00-01.rrfxpny.mongodb.net:27017,ac-uonkmme-shard-00-02.rrfxpny.mongodb.net:27017/?ssl=true&replicaSet=atlas-6ewvf5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
await mongoose.connect(MONGO_URI , {useNewUrlParser: true});
console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}
export default DBConnection;