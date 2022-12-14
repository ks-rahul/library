const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const status = [0, 1];

const UserAddressSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  flat_no: { type: Number, require: true },
  address_1: { type: String, default: null },
  address_2: { type: String, default: null },
  city: { type: String, require: true },
  district: { type: Number, default: null },
  state: { type: Number, require: false },
  country: { type: String },
  pincode: { type: String },
  status: { type: Number, enum: status, default: 1 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

UserAddressSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("UserAddress", UserAddressSchema);
