const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TokenModel = require("../model/token.model");
const UserModel = require("../model/user.model");
const dotenv = require("dotenv");

dotenv.config();

export const register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = {
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    };
    const newUser = new UserModel(userData);
    let result = await newUser.save();
    res.json({
      result: result,
      msg: "User created",
      status: true,
    });
  } catch (error) {
    next({ error });
  }
};

export const login = async (req, res, next) => {
  let user = await UserModel.findOne({
    username: req.body.username,
    password: hashpassword,
  });
  if (!user) {
    return response.status(400).json({ msg: "user does not exist" });
  }
  try {
    let userCheck = await bcrypt.compare(req.body.password, user.password);
    if (userCheck) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );
      const newToken = new TokenModel({ token: refreshToken });
      await newToken.save();
      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      next({
        status: 400,
        msg: "Password doesnot match.",
      });
    }
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

export const logoutuser = async (req, res, next) => {
  const token = req.body.token;
  await TokenModel.deleteOne({ token: token });
  res.json({
    staus: true,
    msg: "Logout successfull.",
  });
};
