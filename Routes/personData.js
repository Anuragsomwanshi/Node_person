const express = require('express');
const bodyparser = require('body-parser');

const router = express.Router();
router.use(bodyparser.json());
const person = require('../database');


router.post('/',async(req,res)=>{
   const data = req.body;
   const newperson = new person(data);
   const result = await newperson.save();
   res.json({result:result});
   
})
router.get('/',async(req,res)=>{
    const result = await person.find(); 
    res.json({result});
})

router.get('/:id',async(req,res)=>{
    const result = await person.findById(req.params.id); 
    res.json({result});
}) 
 
router.patch('/:id',async(req,res)=>{
     await person.findByIdAndUpdate(req.params.id,{Last_Name:'jadhav'});
     res.json({msg:"updated succefully"})
})


router.delete('/:id',async(req,res)=>{
    await person.findByIdAndDelete(req.params.id);
    res.json({msg:"deleted"});
   
    
})


module.exports = router;