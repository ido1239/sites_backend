const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.json({msg: "hello bitches"});
})

module.exports = router;