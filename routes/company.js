const express = require("express");
const router = express.Router();
const company = require("../controllers/company");

router.post("/company", company.createCompany);

module.exports = router;
