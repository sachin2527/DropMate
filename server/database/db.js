import mongoose from "mongoose";
const DBConnection = async () =>{
    const MONGO_URI  = `mongodb://user1:mongodb@ac-uonkmme-shard-00-00.rrfxpny.mongodb.net:27017,ac-uonkmme-shard-00-01.rrfxpny.mongodb.net:27017,ac-uonkmme-shard-00-02.rrfxpny.mongodb.net:27017/?ssl=true&replicaSet=atlas-6ewvf5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
await mongoose.connect(MONGO_URI , {useNewUrlParser: true});
console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}
export default DBConnection;