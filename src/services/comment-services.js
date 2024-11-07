import { commentRepository, tweetRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.commentRepo = new commentRepository();
    this.tweetRepo = new tweetRepository();
  }

  async create(modelId, modelType, userId, content) {
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepo.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepo.get(modelId);
    } else {
      throw new Error("Unknown Type");
    }
    const comment = await this.commentRepo.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });

    commentable.comments.push(comment);
    await commentable.save();

    return comment;
  }
}

export default CommentService;
