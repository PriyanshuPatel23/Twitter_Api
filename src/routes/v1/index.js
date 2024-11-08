import express from "express";

import { create, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";

const router = express.Router();

router.post("/tweets", create);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

export default router;
