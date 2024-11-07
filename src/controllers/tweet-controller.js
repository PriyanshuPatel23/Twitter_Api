import TweetService from "../services/tweet-Services.js";

const tweetService = new TweetService();

export const create = async (req, res) => {
  try {
    const response = await tweetService.createTweet(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      data: {},
      err: error,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully created a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      data: {},
      err: error,
    });
  }
};
