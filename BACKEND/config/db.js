import mongoose from 'mongoose';

const URI = process.env.URI;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DB = process.env.DB;

mongoose.connect(`${URI}://${USERNAME}:${PASSWORD}@${HOST}/${DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db =  mongoose.connection

export default db;
