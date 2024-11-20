import { getTweet } from "../../src/controllers/tweet-controller.js";
import TweetService from "../../src/services/tweet-Services.js";
import { mockRequest, mockResponse } from "../mocker.js";

jest.mock("../../src/services/tweet-Services.js");

test("Should return tweets", async () => {
  const req = mockRequest();
  const res = mockResponse();
  const response = [
    {
      content: "Tweet 1",
    },
    {
      content: "Tweet 2",
    },
  ];
  TweetService.prototype.get.mockReturnValue(response);
  await getTweet(req, res);
  expect(res.json).toHaveBeenCalledWith({
    success: true,
    message: "Successfully created a tweet",
    data: response,
    err: {},
  });
});
