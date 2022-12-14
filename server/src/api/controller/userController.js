const bcrypt = require("bcrypt");

const { error, success, validation } = require("../../utils/responseUtils");
const { generateRandomString } = require("../../utils/utils");

const UserModel = require("../model/user");
const UserAddress = require("../model/userAddress");

const saltRounds = 10;

exports.postRegister = async (req, res, next) => {
  try {
    const {
      community,
      flat_no,
      email,
      password,
      first_name,
      last_name,
      phone_no,
      city,
      state,
    } = req.body;

    // if()

    const userEmailCheck = await User.findOne({ email });
    if (userEmailCheck)
      return res.status(400).json(error("Email already in use", res.status));

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      community,
      name: first_name + " " + last_name,
      first_name,
      last_name,
      user_name: first_name + "(" + generateRandomString() + ")",
      phone_no,
      whatsapp_no: phone_no,
      email,
      password: hashedPassword,
    });

    const userAddress = await UserAddress.create({
      user_id: user.id,
      flat_no,
      city,
      state,
    });

    delete user.password;

    return res
      .status(201)
      .json(success("User Created successfully", user, res.status));
  } catch (ex) {
    next(ex);
  }
};
