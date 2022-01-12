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

module.exports = {
    addResort,
    getAllResorts,
    getResort,
    updateResort,
    deleteResort,
    getMapData
}