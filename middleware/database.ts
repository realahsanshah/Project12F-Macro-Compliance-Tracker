import {MongoClient} from 'mongodb';
import nextConnect from 'next-connect';
import dotenv from 'dotenv';

dotenv.config();


const client=new MongoClient(`${process.env.MONGODB_CONNECTION}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


const database=async(req,res,next)=>{ 
    if(!client.isConnected()) 
        await client.connect();

    req.dbClient=client;
    req.db=client.db("MCT");

    return next();
}

const middleware=nextConnect();

middleware.use(database);

export default middleware;
