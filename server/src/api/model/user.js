const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const status = [0, 1];
const isAvatarSet = [0, 1];

const UserSchema = new Schema({
  community: { type: String, require: true },
  name: { type: String, require: true },
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  user_name: { type: String, require: true },
  phone_no: { type: Number, require: true },
  whatsapp_no: { type: Number, require: false },
  status: { type: Number, enum: status, default: 1 },
  email: { type: String, unique: true, require: true },
  email_verifyed_at: { type: Date },
  remember_token: { type: String },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  avatar: { type: String },
  password: { type: String },
  isAvatarImageSet: { type: Boolean, enum: isAvatarSet, default: 0 },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
