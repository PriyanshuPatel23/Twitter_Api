import mongoose from "mongoose";
import { MONGO_URI } from "./serverConfig.js";

export const connect = async () => {
  await mongoose.connect(MONGO_URI),
    { useNewUrlParser: true, useUnifiedTopology: true };
};
