import TweetService from "../services/tweet-Services.js";
// import upload from "../config/aws-s3-file-config.js";

const tweetService = new TweetService();
// const SingleUpload = upload.single("image");

export const create = async (req, res) => {
  try {
    // SingleUpload(req, res, async function (err, data) {
    //   if (err) {
    //     return res.status(500).json({ error: err });
    //   }
    //   console.log("Image url is ", req.file);
    //   const payload = { ...req.body };
    //   payload.image = req.file.location;
    // });
    const response = await tweetService.createTweet(payload);
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
