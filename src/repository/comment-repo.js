import CrudRepo from "./crud-repo.js";
import comment from "../models/comment.js";

class CommentRepo extends CrudRepo {
  constructor() {
    super(comment);
  }
}

export default CommentRepo;
