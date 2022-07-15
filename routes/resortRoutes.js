const express = require("express");
const {
  addRegistration,
  addResort,
  getAllResorts,
  getResort,
  updateResort,
  deleteResort,
  getMapData,
  getAllShops,
  getAllMyntraData,
  addShop,
  addHomeGenieDataBycategories,
  deleteGenieById,
  getAllHGByCategory,
  deleteGShopDataBy,
  deleteGShopHariDataBy,
  getAllShopsHari,
  addHariShop,
  loginHandle,
  getUserDetails,
  addCollectionsWithReferenceToMainClassification,
  getAllshopsCollectionsWithReference,
  deleteGShopDataByCollectionsWithReference,
  getAllregistrationdata
} = require("../controllers/resortController");

const router = express.Router();

router.post("/addresort", addResort);
router.get("/getregdata", getAllregistrationdata);
router.post("/addregistration", addRegistration);
router.get("/allResorts", getAllResorts);
router.get("/resort/:id", getResort);
router.put("/resort/:id", updateResort);
router.delete("/resort/:id", deleteResort);
router.get('/mapData',getMapData);
router.get('/shopData',getAllShops);
router.get('/shopDataByCollection',getAllshopsCollectionsWithReference);
router.get('/myntraDataAll' , getAllMyntraData);
router.post("/addShop", addShop);
router.post("/addByCollection", addCollectionsWithReferenceToMainClassification);
router.post("/addHomeGenieDataBycategories", addHomeGenieDataBycategories);
router.delete("/deleteHG/:id", deleteGenieById);
router.delete("/deleteGShopDataBy/:id", deleteGShopDataBy);
router.delete("/deleteGShopDataByCollection/:id", deleteGShopDataByCollectionsWithReference);

router.get('/getGenieRecordsByAllCategories',getAllHGByCategory);


//hari test
router.get('/getAllShopsHari',getAllShopsHari);
router.post("/addHariShop", addHariShop);
router.delete("/deleteGShopHariDataBy/:id", deleteGShopHariDataBy);

//sathish task 15-07-2022
router.post("/signUp-sathish", loginHandle);
router.post('/login-sathish', getUserDetails);



module.exports = {
  routes: router,
};
