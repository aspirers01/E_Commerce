const express = require("express");
const { AdressSaveController } = require("../Controllers/AddressController");

const router = express.Router();
router.post("/adress", AdressSaveController);

module.exports = router;
