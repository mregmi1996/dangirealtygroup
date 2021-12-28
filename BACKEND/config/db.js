import configDb from './db.config.js';
import mongoose from 'mongoose';

mongoose.connect(`${configDb.URI}://${configDb.USERNAME}:${configDb.PASSWORD}@${configDb.HOST}/${configDb.DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db =  mongoose.connection

export default db;
