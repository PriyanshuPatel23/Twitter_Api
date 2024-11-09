import user from "../models/user.js";
import { userRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userrepository = new userRepository();
  }

  async signup(data) {
    try {
      const user = await this.userrepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByEmail(email) {
    try {
      const response = await this.userrepository.getByEmail({ email });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw {
          message: "No user found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "incorrect password",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
