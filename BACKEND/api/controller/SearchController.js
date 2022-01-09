import axios from 'axios';
import * as searchService from '../services/search.service.js'

const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}

const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}


export const getSearchBar = async (req, resp) => {
    var config = {
        method: 'get',
        url: 'https://idx.mlspin.com/search.asp?aid=BB815751'
    };

    axios(config)
        .then(function (response) {
            console.log("here")
            let scrapedData = searchService.searchForLocations(response.data)
            console.log("scrapedData");
            setSuccessResponse(scrapedData, resp);
        })
        .catch(function (error) {
            errorhandler(error, resp);
        });
}

export const getListings = async(req, resp)=>{
    try{
        const getRequestURL = searchService.buildQueryString({...req.body});
        var config = {
            method: 'get',
            url: getRequestURL
        };
    
        axios(config)
            .then(function (response) {
                let scrapedData = searchService.listings(response.data)
                setSuccessResponse(scrapedData, resp);
            })
            .catch(function (error) {
                console.log(error)
            });
    }catch(error){
       errorhandler(error, resp) 
    }
}