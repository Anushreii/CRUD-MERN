require("dotenv").config();

const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 6900;
const MONGO_URI = process.env.MONGO_URI;
// if (!MONGO_URI) {
//     console.error("❌ ERROR: MONGO_URL is undefined. Check your .env file.");
//     process.exit(1);
//   }

const client = new MongoClient(MONGO_URI);

app.listen(PORT,()=>{
 console.log(`Server started on http://localhost:${PORT}`);
})


//GET REQUEST
app.get("/productsList", async(req,res)=>{
  await client.connect();
  let result = await client.db("operations").collection("products").find().toArray();
  res.json(result);
});



//POST REQUEST
app.post("/add", async(req,res)=>{
    await client.connect();
    let result = await client.db("operations").collection("products").insertOne
    ({
      "p_id":req.body.p_id,
      "p_name":req.body.p_name,
      "p_cost":req.body.p_cost,
      "p_discount":req.body.p_discount,
    });
    //res.json(result);

    const {acknowledged} = result;
    if(acknowledged){
        res.json({message:"Product added successfully"});
    }
    else{
        res.json({message:"Product added Failed"});
    }

})

//PUT REQUEST
app.put("/Update",async(req,res)=>{
 await client.connect();
 let result = await client.db("operations").collection("products").updateOne({"p_id":req.body.p_id},
 {$set:
    {"p_name":req.body.p_name,
     "p_cost":req.body.p_cost,
     "p_discount":req.body.p_discount
}});

//res.json(result);
const {acknowledged} = result;
if(acknowledged){
    res.json({message:"Product updated successfully"});
}
else{
    res.json({message:"Product updation Failed"});
    
}

})


//DELETE REQUEST
app.delete("/delete",async(req,res)=>{
  await client.connect();
  let result= await client.db("operations").collection("products").deleteOne({"p_id":req.body.p_id});
    //res.json(result);
    const {acknowledged} = result;
    if(acknowledged){
        res.json({message:"Product deleted successfully"});
    }
    else{
        res.json({message:"Product deletion Failed"});
    }
    
})





// app.listen (6900, ()=>{
//     console.log("Server started on port 6900");
// });