'use strict';

const { default: axios } = require('axios');
const firebase = require('../db');
const ResortDataClass = require('../models/resort');
const firestore = firebase.firestore();


const addResort = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('hotelData').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllResorts = async (req, res, next) => {
    try {
        const resortData = await firestore.collection('hotelData');
        const data = await resortData.get();
        const resortDataArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {debugger
                const resortData = new ResortDataClass(
                    doc.id,
                    doc.data().average_price_to_order,
                    doc.data().follows_all_covid_protocals,
                    doc.data().hotel_name,
                    doc.data().kind_of_food_available,
                    doc.data().menu_available,
                    doc.data().offer_available,
                    doc.data().promoted,
                );
                resortDataArray.push(resortData);
            });
            res.send(resortDataArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getResort = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resortById = await firestore.collection('hotelData').doc(id);
        const data = await resortById.get();
        if(!data.exists) {
            res.status(404).send('Resort with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateResort = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resort =  await firestore.collection('hotelData').doc(id);
        await resort.update(data);
        res.send('Resort record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteResort = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('hotelData').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


// map data

const getMapData = async (req, res, next) => {
    try {
        // let data = req.body;
        let lat = Number(req.url.split("latitude")[1].split("&")[0].replace("=",""));
        let lng = Number(req.url.split("longitude")[1].replace("=",""));
        let key = `AIzaSyBHkESRyB7oJAtl15zRm6cXnBBoe2rS9Ik`;
        let mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
        let dataFromMap = await axios.get(mapUrl)
        // await firestore.collection('hotelData').doc(id).delete();
        res.send(dataFromMap.data);
    } catch (error) {
        res.status(400).send(error);
    }
}

// send in a batch home genie
const addBatchHomeGenieDataBycategories = async (req, res, next) => {
    try {
        const data = req.body;

        await firestore.collection('HomeGenieDataBycategories').doc().set(data);
        res.send('Multiple data Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//shoppingData 

const getAllShops = async (req, res, next) => {
    try {
        const shoppingData = await firestore.collection('shopData');
        let data = await shoppingData.get();
        const shopArr = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                let id = doc.id;
                shopArr.push({id,...doc.data()})
            });
            res.send(shopArr);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllshopsCollectionsWithReference = async (req, res, next) => {
    try {
        const shoppingData = await firestore.collection('CollectionsWithReference');
        let data = await shoppingData.get();
        const shopArr = [];
        if(data.empty) {
            res.status(404).send('No CollectionsWithReference record found');
        }else {
            data.forEach(doc => {
                let id = doc.id;
                shopArr.push({id,...doc.data()})
            });
            res.send(shopArr);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllShopsHari = async (req, res, next) => {
    try {
        const shoppingData = await firestore.collection('hariShop');
        let data = await shoppingData.get();
        const shopArr = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                let id = doc.id;
                shopArr.push({id,...doc.data()})
            });
            res.send(shopArr);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteGShopHariDataBy = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('hariShop').doc(id).delete();
        res.send('ShopData Record deleted by id successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addHariShop = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('hariShop').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteGShopDataBy = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('shopData').doc(id).delete();
        res.send('ShopData Record deleted by id successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteGShopDataByCollectionsWithReference = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('CollectionsWithReference').doc(id).delete();
        res.send('CollectionsWithReference Record deleted by id successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addShop = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('shopData').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCollectionsWithReferenceToMainClassification = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('CollectionsWithReference').doc().set(data);
        res.send('Record saved successfuly to CollectionsWithReference');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addHomeGenieDataBycategories = async (req, res, next) => {
    try {
        const data = req.body;
        let awaited = await firestore.collection('HomeGenieDataBycategories').doc().set(data);
        res.send('Record saved successfuly');
        console.log(awaited);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
// delete home genie data by categories

const deleteGenieById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('HomeGenieDataBycategories').doc(id).delete();
        res.send('HomeGenieDataBycategory Record deleted by id successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}



//get all data from home geneie by category;
const getAllHGByCategory = async (req, res, next) => {
    try {
        const HomeGenieData = await firestore.collection('HomeGenieDataBycategories');
        let data = await HomeGenieData.get();
        const GenieArr = [];
        if(data.empty) {
            res.status(404).send('No Genie records found');
        }else {
            data.forEach(doc => {
                let id = doc.id ;
                   
                GenieArr.push({ id , ...doc.data()})
                    
                
            });
            res.send(GenieArr);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addResort,
    getAllResorts,
    getResort,
    updateResort,
    deleteResort,
    getMapData,
    getAllShops,
    addShop,
    addCollectionsWithReferenceToMainClassification,
    addHomeGenieDataBycategories,
    deleteGenieById,
    getAllHGByCategory,
    getAllshopsCollectionsWithReference,
    deleteGShopDataBy,
    deleteGShopDataByCollectionsWithReference,
    addHariShop,
    deleteGShopHariDataBy,
    getAllShopsHari
}