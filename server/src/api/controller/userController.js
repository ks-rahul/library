const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { error, success, validation } = require("../../helpers/response");
const { generateRandomString } = require("../../utils/utils");
const { signupRules, signinRules } = require("../../validation/rules");
const { validator } = require("../../helpers/validation");

const UserModel = require("../model/user");
const UserAddress = require("../model/userAddress");

const saltRounds = 10;

exports.registration = async (req, res, next) => {
  try {
    validator(req.body, signupRules, null, async (err, status) => {
      if (!status) return res.status(400).json(validation(err));

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

      const userEmailCheck = await UserModel.findOne({ email });
      if (userEmailCheck)
        return res.status(400).json(error("Email already in use", res.status));

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await UserModel.create({
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
    });
  } catch (ex) {
    next(ex);
  }
};

exports.login = async (req, res, next) => {
  try {
    validator(req.body, signinRules, null, async (err, status) => {
      const { email, password } = req.body;
      const userExist = await UserModel.findOne({ email });
      if (!userExist) {
        return res
          .status(400)
          .json(error("Incorrect Username or Password!", res.status));
      }
      bcrypt.compare(password, userExist.password, function (err, results) {
        if (err) {
          next(err);
        }

        if (results) {
          res.status(200).json(
            success(
              "Success",
              {
                ...results,
                token: jwt.sign(results, process.env.SECRET),
              },
              res.status
            )
          );
          delete userExist.password;
        } else {
          return res
            .status(400)
            .json(error("Incorrect Username or Password!", res.status));
        }
      });
    });
  } catch (error) {
    next(error);
  }
};

// copyes
// const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const crypto = require("crypto");
// const db = require('_helpers/db');

// module.exports = {
//     authenticate,
//     refreshToken,
//     revokeToken,
//     getAll,
//     getById,
//     getRefreshTokens
// };

// async function authenticate({ username, password, ipAddress }) {
//     const user = await db.User.findOne({ username });

//     if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
//         throw 'Username or password is incorrect';
//     }

//     // authentication successful so generate jwt and refresh tokens
//     const jwtToken = generateJwtToken(user);
//     const refreshToken = generateRefreshToken(user, ipAddress);

//     // save refresh token
//     await refreshToken.save();

//     // return basic details and tokens
//     return {
//         ...basicDetails(user),
//         jwtToken,
//         refreshToken: refreshToken.token
//     };
// }

// async function refreshToken({ token, ipAddress }) {
//     const refreshToken = await getRefreshToken(token);
//     const { user } = refreshToken;

//     // replace old refresh token with a new one and save
//     const newRefreshToken = generateRefreshToken(user, ipAddress);
//     refreshToken.revoked = Date.now();
//     refreshToken.revokedByIp = ipAddress;
//     refreshToken.replacedByToken = newRefreshToken.token;
//     await refreshToken.save();
//     await newRefreshToken.save();

//     // generate new jwt
//     const jwtToken = generateJwtToken(user);

//     // return basic details and tokens
//     return {
//         ...basicDetails(user),
//         jwtToken,
//         refreshToken: newRefreshToken.token
//     };
// }

// async function revokeToken({ token, ipAddress }) {
//     const refreshToken = await getRefreshToken(token);

//     // revoke token and save
//     refreshToken.revoked = Date.now();
//     refreshToken.revokedByIp = ipAddress;
//     await refreshToken.save();
// }

// async function getAll() {
//     const users = await db.User.find();
//     return users.map(x => basicDetails(x));
// }

// async function getById(id) {
//     const user = await getUser(id);
//     return basicDetails(user);
// }

// async function getRefreshTokens(userId) {
//     // check that user exists
//     await getUser(userId);

//     // return refresh tokens for user
//     const refreshTokens = await db.RefreshToken.find({ user: userId });
//     return refreshTokens;
// }

// // helper functions

// async function getUser(id) {
//     if (!db.isValidId(id)) throw 'User not found';
//     const user = await db.User.findById(id);
//     if (!user) throw 'User not found';
//     return user;
// }

// async function getRefreshToken(token) {
//     const refreshToken = await db.RefreshToken.findOne({ token }).populate('user');
//     if (!refreshToken || !refreshToken.isActive) throw 'Invalid token';
//     return refreshToken;
// }

// function generateJwtToken(user) {
//     // create a jwt token containing the user id that expires in 15 minutes
//     return jwt.sign({ sub: user.id, id: user.id }, config.secret, { expiresIn: '15m' });
// }

// function generateRefreshToken(user, ipAddress) {
//     // create a refresh token that expires in 7 days
//     return new db.RefreshToken({
//         user: user.id,
//         token: randomTokenString(),
//         expires: new Date(Date.now() + 7*24*60*60*1000),
//         createdByIp: ipAddress
//     });
// }

// function randomTokenString() {
//     return crypto.randomBytes(40).toString('hex');
// }

// function basicDetails(user) {
//     const { id, firstName, lastName, username, role } = user;
//     return { id, firstName, lastName, username, role };
// }

// copyed cnontroler

// const express = require('express');
// const router = express.Router();
// const Joi = require('@hapi/joi');
// const validateRequest = require('_middleware/validate-request');
// const authorize = require('_middleware/authorize')
// const Role = require('_helpers/role');
// const userService = require('./user.service');

// // routes
// router.post('/authenticate', authenticateSchema, authenticate);
// router.post('/refresh-token', refreshToken);
// router.post('/revoke-token', authorize(), revokeTokenSchema, revokeToken);
// router.get('/', authorize(Role.Admin), getAll);
// router.get('/:id', authorize(), getById);
// router.get('/:id/refresh-tokens', authorize(), getRefreshTokens);

// module.exports = router;

// function authenticateSchema(req, res, next) {
//     const schema = Joi.object({
//         username: Joi.string().required(),
//         password: Joi.string().required()
//     });
//     validateRequest(req, next, schema);
// }

// function authenticate(req, res, next) {
//     const { username, password } = req.body;
//     const ipAddress = req.ip;
//     userService.authenticate({ username, password, ipAddress })
//         .then(({ refreshToken, ...user }) => {
//             setTokenCookie(res, refreshToken);
//             res.json(user);
//         })
//         .catch(next);
// }

// function refreshToken(req, res, next) {
//     const token = req.cookies.refreshToken;
//     const ipAddress = req.ip;
//     userService.refreshToken({ token, ipAddress })
//         .then(({ refreshToken, ...user }) => {
//             setTokenCookie(res, refreshToken);
//             res.json(user);
//         })
//         .catch(next);
// }

// function revokeTokenSchema(req, res, next) {
//     const schema = Joi.object({
//         token: Joi.string().empty('')
//     });
//     validateRequest(req, next, schema);
// }

// function revokeToken(req, res, next) {
//     // accept token from request body or cookie
//     const token = req.body.token || req.cookies.refreshToken;
//     const ipAddress = req.ip;

//     if (!token) return res.status(400).json({ message: 'Token is required' });

//     // users can revoke their own tokens and admins can revoke any tokens
//     if (!req.user.ownsToken(token) && req.user.role !== Role.Admin) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     userService.revokeToken({ token, ipAddress })
//         .then(() => res.json({ message: 'Token revoked' }))
//         .catch(next);
// }

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(next);
// }

// function getById(req, res, next) {
//     // regular users can get their own record and admins can get any record
//     if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(next);
// }

// function getRefreshTokens(req, res, next) {
//     // users can get their own refresh tokens and admins can get any user's refresh tokens
//     if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     userService.getRefreshTokens(req.params.id)
//         .then(tokens => tokens ? res.json(tokens) : res.sendStatus(404))
//         .catch(next);
// }

// // helper functions

// function setTokenCookie(res, token)
// {
//     // create http only cookie with refresh token that expires in 7 days
//     const cookieOptions = {
//         httpOnly: true,
//         expires: new Date(Date.now() + 7*24*60*60*1000)
//     };
//     res.cookie('refreshToken', token, cookieOptions);
// }
