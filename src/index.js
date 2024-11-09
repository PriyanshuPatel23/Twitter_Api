import express from "express";
import bodyParser from "body-parser";
import passport from "passport";

import { connect } from "./config/database.js";
import { passportAuth } from "./config/jwt-middleware.js";
import apiRoutes from "./routes/index.js";
import { PORT } from "./config/serverConfig.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.use(passport.initialize());
passportAuth(passport);

app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
  await connect();
  console.log("MongoDb connected");
});
