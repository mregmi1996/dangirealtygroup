import express from 'express';
import *  as realtorController from '../controller/RealtorController.js';

const router = express.Router();

router.route('/realtor/:username1')
    .get(realtorController.getRealtor)

router.route('/realtor')
    .post(realtorController.addNewRealtor)

router.route('/getAllRealtors')
    .get(realtorController.getAllRealtors)

export default router;