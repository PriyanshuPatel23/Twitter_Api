import { likeRepository, tweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";

class likeService {
  constructor() {
    this.LikeRepository = new likeRepository();
    this.tweetRepository = new tweetRepository();
  }

  async toggleLike(modelid, modeltype, userid) {
    if (modeltype == "Tweet") {
      var likeable = await this.tweetRepository.find(modelid);
    } else if (modeltype == "Comment") {
      //remaining yet
    } else {
      throw new Error("unknown model type");
    }

    const exist = await this.LikeRepository.findUserByLikeable({
      user: userid,
      onModel: modeltype,
      likeable: modelid,
    });
    if (exist) {
      likeable.likes.pull(exist.id);
      await likeable.save();
      await this.LikeRepository.destroy(exist.id);
      var isAdded = false;
    } else {
      const newLike = await this.LikeRepository.create({
        user: userid,
        onModel: modeltype,
        likeable: modelid,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default likeService;
