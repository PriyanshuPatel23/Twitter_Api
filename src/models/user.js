import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SALT, JWT_SECRET } from "../config/serverConfig.js";

const userModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userModel.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userModel.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userModel.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

const user = mongoose.model("User", userModel);

export default user;
