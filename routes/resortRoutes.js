const express = require("express");
const {
  addResort,
  getAllResorts,
  getResort,
  updateResort,
  deleteResort,
  getMapData,
  getAllShops,
  addShop
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

module.exports = {
  routes: router,
};
