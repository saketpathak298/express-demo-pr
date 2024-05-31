const companyModule = require("../modules/company");
const companyCntrl = {};

companyCntrl.createCompany = async (req, res) => {
  try {
    const {
      name,
      organization_name,
      email,
      password,
      mobile,
      address,
      country,
      no_of_employee,
      logo,
      color_scheme,
    } = req.body;

    const data = new companyModule(req.body);
    // console.log(req.body, "WWWWWW", await data.save(), "<>>");
    await data
      .save()
      .then((res) => {
        console.log("promis", res);

        res.status(200).send({
          status: 201,
          success: true,
          data: res,
        });
      })
      .catch((err) => {
        res.status(400).send({
          success: false,
          errors: err,
          msg: "Something went wrong in",
        });
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "something went wrong fr",
      error: error,
    });
  }
};

module.exports = companyCntrl;
