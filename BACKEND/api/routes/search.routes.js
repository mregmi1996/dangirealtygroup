import express from 'express';
import * as searchController from '../controller/SearchController.js';


const router = express.Router();

router.route('/getSearchBar')
    .get(searchController.getSearchBar)

router.route('/getListings')
    .post(searchController.getListings)

export default router;