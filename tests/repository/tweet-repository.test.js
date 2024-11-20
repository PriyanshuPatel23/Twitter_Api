import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("creating Tweets", () => {
  test("should create a new tweet and return it", async () => {
    const data = {
      content: "Testing Tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2024-11-14", updatedAt: "2024-11-14" };
    });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
  });

  test("should not create tweet and throw exception", async () => {
    const data = {
      content: "Testing tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("something went wrong");
    });
  });
});

describe("get all Tweets", () => {
  test("testing limit for get all", async () => {
    const data = {
      content: "Testing Tweet",
    };
    const tweetArray = [
      { ...data, createdAt: "2024-11-14", updatedAt: "2024-11-14" },
      { ...data, createdAt: "2024-11-14", updatedAt: "2024-11-14" },
      { ...data, createdAt: "2024-11-14", updatedAt: "2024-11-14" },
      { ...data, createdAt: "2024-11-14", updatedAt: "2024-11-14" },
    ];
    const findResponse = { tweetArray };
    findResponse.limit = jest.fn((limit) =>
      findResponse.tweetArray.slice(0, limit)
    );
    findResponse.skip = jest.fn((offset) => findResponse);
    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResponse;
    });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweet).toHaveLength(2);
  });
});
