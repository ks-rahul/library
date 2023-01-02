const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const status = [0, 1];
const isAvatarSet = [0, 1];

const UserSchema = new Schema({
  community: { type: String, require: [true, "Community is required"] },
  name: { type: String, require: [true, "User name is required"] },
  first_name: { type: String, require: [true, "First name is required"] },
  last_name: { type: String, require: [true, "Last name is required"] },
  user_name: { type: String, require: [true, "Username is required"] },
  phone_no: { type: Number, require: [true, "Phone number is required"] },
  whatsapp_no: { type: Number, require: false },
  status: { type: Number, enum: status, default: 1 },
  email: { type: String, unique: true, require: [true, "Email is required"] },
  email_verifyed_at: { type: Date },
  remember_token: { type: String },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  avatar: { type: String },
  password: { type: String },
  isAvatarImageSet: { type: Boolean, enum: isAvatarSet, default: 0 },
});

// schema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     // remove these props when object is serialized
//     delete ret._id;
//     delete ret.passwordHash;
//   },
// });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
