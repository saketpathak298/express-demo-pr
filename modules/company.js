const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const companySchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"], trim: true },
  organization_name: { type: String, required: true },
  email: {
    type: String,
    unique: [true, "Email can`t be duplicate"],
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
  },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  no_of_employee: { type: Number, required: true },
  logo: { type: String, required: true },
  color_scheme: { type: String, required: true },
});

// check is password pre hashed
// companySchema.pre("save", function (next) {
//   const user = this;
//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, null, (err, hash) => {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });

const CompanyModel = mongoose.model("Company", companySchema);

module.exports = CompanyModel;
