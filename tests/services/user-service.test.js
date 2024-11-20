import UserService from "../../src/services/user-service.js";
import userRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");

describe("user service signup test", () => {
  test("should succesfully create user", async () => {
    const data = {
      email: "a@b.com",
      password: "123456",
    };
    userRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "2024-11-15",
      updatedAt: "2024-11-15",
    });
    const service = new UserService();
    const response = await service.signup();
    expect(response.email).toBe(data.email);
  });
});
