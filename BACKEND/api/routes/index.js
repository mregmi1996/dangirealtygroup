import realtorRouter from './realtor.routes.js';
import imageRouter from './images.routes.js';
import userRouter from './user.routes.js';
export default (app) => {

    app.get('/', (req, res) => {
        res.status(200).send('<h1> Welcome to DangiRealtyGroup! </h1>')
    })
    app.use('/', [realtorRouter,imageRouter,userRouter]);
}