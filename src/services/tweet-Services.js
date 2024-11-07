import { tweetRepository, hashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.TweetRepository = new tweetRepository();
    this.HashtagRepository = new hashtagRepository();
  }

  async createTweet(data) {
    try {
      const content = data.content;

      let tags = content
        .match(/#[a-zA-Z0-9_]+/g)
        .map((tag) => tag.substring(1))
        .map((tag) => tag.toLowerCase());

      const tweet = await this.TweetRepository.createTweet(data);

      let alreadyPresentTags = await this.HashtagRepository.findByName(tags);

      let titleofPresentTags = alreadyPresentTags.map((tag) => tag.title);

      let newTags = tags.filter((tag) => !titleofPresentTags.includes(tag));
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });

      const response = await this.HashtagRepository.bulkCreate(newTags);

      alreadyPresentTags.forEach(async (tag) => {
        tag.tweets.push(tweet.id);
        await tag.save();
      });

      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetService;
