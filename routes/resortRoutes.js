const express = require("express");
const {
  addResort,
  getAllResorts,
  getResort,
  updateResort,
  deleteResort,
  getMapData,
  getAllShops,
  addShop,
  addHomeGenieDataBycategories,
  deleteGenieById,
  getAllHGByCategory,
  deleteGShopDataBy,
  deleteGShopHariDataBy,
  getAllShopsHari,
  addHariShop
} = require("../controllers/resortController");

const router = express.Router();

router.post("/addresort", addResort);
router.get("/allResorts", getAllResorts);
router.get("/resort/:id", getResort);
router.put("/resort/:id", updateResort);
router.delete("/resort/:id", deleteResort);
router.get('/mapData',getMapData);
router.get('/shopData',getAllShops);
router.post("/addShop", addShop);
router.post("/addHomeGenieDataBycategories", addHomeGenieDataBycategories);
router.delete("/deleteHG/:id", deleteGenieById);
router.delete("/deleteGShopDataBy/:id", deleteGShopDataBy);
router.get('/getGenieRecordsByAllCategories',getAllHGByCategory);


//hari test
router.get('/getAllShopsHari',getAllShopsHari);
router.post("/addHariShop", addHariShop);
router.delete("/deleteGShopHariDataBy/:id", deleteGShopHariDataBy);



module.exports = {
  routes: router,
};
