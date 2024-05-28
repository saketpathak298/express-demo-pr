const company = require("../controllers/company");
const express = require("express");
const router = express.Router();

router.post("/company/", company.createCompany);

module.exports = router;
