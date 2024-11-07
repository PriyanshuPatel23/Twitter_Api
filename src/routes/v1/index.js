import express from "express";

import { create } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";

const router = express.Router();

router.post("/tweets", create);

router.post("/likes/toggle", toggleLike);

export default router;
