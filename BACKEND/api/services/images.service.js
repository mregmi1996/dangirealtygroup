import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const URI = process.env.URI;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DB = process.env.DB;

const storage=new GridFsStorage({
    url:`${URI}://drg:${PASSWORD}@${HOST}/${DB}`,
    options:{useNewUrlParser:true, useUnifiedTopology:true},
    file:(req,file)=>{
        const match=["image/png","image/jpeg"];
        if(match.indexOf(file.mimetype)===-1){
            const filename=`${file.originalname}`;
            return filename;
        }
        return {
            bucketName:'photos',
            filename:`${Date.now()}-${file.originalname}`
        }
    }
})

export default multer({storage});