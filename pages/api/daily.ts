import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import { ObjectID } from 'mongodb';


const handler = nextConnect();

handler.use(middleware);


handler.get(async (req: any, res: any) => {

    const { date } = req.query;

    const dataModel = {
        "_id": new ObjectID(),
        "date": date,
        "calories": {
            "label": "Calories",
            "total": 0,
            "target": 0,
            "variant": 0
        },
        "carbs": {
            "label": "Carbs",
            "total": 0, 
            "target": 0,
            "variant": 0
        },
        "fat": {
            "label": "Fat",
            "total": 0, 
            "target": 0,
            "variant": 0
        },
        "protein": {
            "label": "Protein",
            "total": 0, 
            "target": 0,
            "variant": 0
        },
    }

    let doc={};
    // let doc = await date?req.db.collection("daily").findOne({date:new Date(date)}):req.db.collection("daily").findOne({date:new Date(date)})

    if(date){
        doc = await req.db.collection('daily').findOne({date: new Date(date)})
    } else {
        doc = await req.db.collection('daily').findOne()
    }


    if(doc===null){
        doc=dataModel;
    }

    console.log("Doc", doc);
    res.json(doc);
});


handler.post(async(req:any,res:any)=>{
    let data=req.body;

    data=JSON.parse(data);

    data.date=new Date(data.date);

    let doc= await req.db.collection("daily").updateOne({date:new Date(data.date)},{$set:data},{upsert:true});
    
    console.log("doc",doc);

    res.json({message:"Data added"});

})


export default handler;