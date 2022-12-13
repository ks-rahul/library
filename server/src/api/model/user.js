const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  image: { type: String },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  password: String,
  phone: { type: Number },
  isAvatarImageSet: Boolean,
  avatarImage: String,
  is_online: false,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
