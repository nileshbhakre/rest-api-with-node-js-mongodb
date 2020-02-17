const express = require('express');
const foodModel = require('../models/food');
const app = express();

//get all post
app.get('/posts', async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

//submit post
app.post('/posts', async (req, res) => {
    var food = new foodModel({name:req.body.name,calories:req.body.calories})
    try {
      await food.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
      console.log(err)
    }
  });

//get specific post

app.get('/posts/:postid', async (req, res) => {
  const foods = await foodModel.findById(req.params.postid);

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});


//delete specific post
app.delete('/posts/:postid',async(req,res)=>{
       const food=await foodModel.deleteOne({_id:req.params.postid})
      
       try {
        res.send(foods);
      } catch (err) {
        res.status(500).send(err);
      }
    });

 //update the post
 app.patch('/posts/:postid',async(req,res)=>{
  const food=await foodModel.updateOne({_id:req.params.postid},
    {$set:{name:req.body.name,calories:req.body.calories}})
 
  try {
   res.send(food);
 } catch (err) {
   res.status(500).send(err);
 }
});


module.exports = app