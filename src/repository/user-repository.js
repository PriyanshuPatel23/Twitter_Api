import user from "../models/user.js";
import CrudRepo from "./crud-repo.js";

class userRepository extends CrudRepo {
  constructor() {
    super(user);
  }
}

export default userRepository;
