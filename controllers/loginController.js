'use strict';

const firebase = require('../db');
const userDataClass = require('../models/users');
const firestore = firebase.firestore();


const addUser = async (req, res, next) => {
    try {
        debugger
        const data = req.body;
        await firestore.collection('logins').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllusers = async (req, res, next) => {
    debugger
    try {
        const userData = await firestore.collection('logins');
        const data = await userData.get();
        const userDataArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {debugger
                const userData = new userDataClass(
                    doc.id,
                    doc.data().email,
                    doc.data().password,
                );
                userDataArray.push(userData);
            });
            res.send(userDataArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAUser = async (req, res, next) => {
    debugger
    try {
        const id = req.params.id;
        const userById = await firestore.collection('logins').doc(id);
        const data = await userById.get();
        if(!data.exists) {
            res.status(404).send('user with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('logins').doc(id);
        await user.update(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAUser = async (req, res, next) => {
    debugger
    try {
        const id = req.params.id;
        await firestore.collection('logins').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    deleteAUser,
    updateAUser,
    getAUser,
    getAllusers
}