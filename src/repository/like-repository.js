import like from "../models/likes.js";
import crudRepo from "./crud-repo.js";

class likeRepository extends crudRepo {
  constructor() {
    super(like);
  }

  async findUserByLikeable(data) {
    try {
      const response = await like.findOne(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default likeRepository;
