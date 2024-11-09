import user from "../models/user.js";
import CrudRepo from "./crud-repo.js";

class userRepository extends CrudRepo {
  constructor() {
    super(user);
  }

  async getByEmail(data) {
    try {
      const response = await user.findOne(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default userRepository;
