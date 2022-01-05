import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

const URI = process.env.URI;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DB = process.env.DB;


console.log(`${URI}://${USERNAME}:${PASSWORD}@${HOST}/${DB}`)
mongoose.connect(`mongodb+srv://drg:Node%23112233@cluster0.osnlp.mongodb.net/DangiRealtyGroup`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
let gfs;

const db =  mongoose.connection

db.once("open", function(){
    gfs=Grid(db.db, mongoose.mongo);
    gfs.collection("photos");
})
export {gfs as gfs}
export default db;
