const companyModule = require("../modules/company");
const companyCntrl = {};

companyCntrl.createCompany = async (req, res) => {
  try {
    console.log(req.body, "WWWWWW");
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "something went wrong",
      error: error,
    });
  }
};

module.exports = companyCntrl;
