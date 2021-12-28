import app from './api/app.js';
import db from './config/db.js'

const PORT = process.env.PORT || 4000;

db.on('error', (err)=>{
    console.log('Error connecting to the DB !');
})

db.once('open', () =>{
    app.listen(PORT, () => {
      console.log(`Successfully connected to the DB..! \nServer is running on port ${PORT}.`);
    });
})