const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  organization_name: { type: String, required: true },
  email: { type: email, unique: true, required: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  no_of_employee: { type: Number, required: true },
  logo: { type: String, required: true },
  color_scheme: { type: String, required: true },
});

// check is password pre hashed
companySchema.pre("save", (next) => {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

const CompanyModel = mongoose.model("Company", companySchema);

module.exports = CompanyModel;
