const express = require("express");
const { addUser,deleteAUser,updateAUser,getAUser,getAllusers } = require("../controllers/loginController");
// const router = express.Router();

const UserRoutes = express.Router();

UserRoutes.post("/addAUser", addUser);
UserRoutes.get("/getAllusers", getAllusers);
UserRoutes.get("/user/:id", getAUser);
UserRoutes.put("/user/:id", updateAUser);
UserRoutes.delete("/user/:id", deleteAUser);

module.exports = {
  UserRoutes: UserRoutes,
};
