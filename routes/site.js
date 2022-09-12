const express =require("express");
const {SiteModel,siteValid} = require("../models/siteModel")
const router = express.Router();


router.get("/", async(req,res)=>{
    // find all sites
    const data = await SiteModel.find({});
    res.json(data);
})

router.post("/", async(req,res)=>{
    const Validbody = siteValid(req.body)
    if(Validbody.error){
        return res.status(400).json(Validbody.error.details);
    }
    try{
        const site = new SiteModel(req.body);
        await site.save();
        res.status(201).json(site);
    }   
    catch(err){
        console.log(err)
        res.status(500).json({msg:"err",err})
    }
})
router.put("/:idEdit", async(req,res)=>{
    const Validbody = siteValid(req.body)
    if(Validbody.error){
        return res.status(400).json(Validbody.error.details);
    }
    try{
        const id = req.params.idEdit;
        const site = await SiteModel.updateOne({_id:id}, req.body);
        res.json(site);
    }   
    catch(err){
        console.log(err)
        res.status(500).json({msg:"err",err})
    }
})
router.delete("/:idDel", async(req,res)=>{
    const id = req.params.idDel;
    try{
        let site = await SiteModel.deleteOne({_id:id});
        res.json(site)
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
})

module.exports = router;