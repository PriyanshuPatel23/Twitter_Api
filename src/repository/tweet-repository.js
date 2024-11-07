import tweet from "../models/tweet.js";
import CrudRepo from "./crud-repo.js";

class tweetRepository extends CrudRepo {
  constructor() {
    super(tweet);
  }
  async createTweet(data) {
    try {
      const Tweet = await tweet.create(data);
      return Tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const Tweet = await tweet
        .findById(id)
        .populate({
          path: "comments",
          populate: {
            path: "comments",
          },
        })
        .lean();
      return Tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const Tweet = await tweet.find().skip(offset).limit(limit);
      return Tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id) {
    try {
      const Tweet = await tweet.findById(id).populate({ path: "likes" });
      return Tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default tweetRepository;
