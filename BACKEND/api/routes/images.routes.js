import { gfs } from '../../config/db.js';
import upload from '../services/images.service.js';
import express from 'express';
import configuration from '../../config.js';

const router =  express.Router();

router.post("/fileupload", upload.single("file"), (req,res)=>{
    if(req.file===undefined) return res.send("No file selected");
    const imgURL = `${configuration.URL}/file/${req.file.filename}`;
    return res.send(imgURL); 
})

router.get("/file/:filename", async(req,res)=>{
    try{
        const file= await gfs.files.findOne({filename:req.params.filename});
        const readStream = gfs.createReadStream({
            filename: file.filename,
           });
        readStream.pipe(res)
    }
    catch(error){
        console.log(error)
        res.send('not found');
    }
})

export default router;