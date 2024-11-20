import { execute } from "../../src/services/dummy-service.js";
import { helper } from "../../src/services/helper-service.js";
jest.mock("../../src/services/helper-service.js");

// test("result is true and answer is LearningJS", () => {
//   helper.mockReturnValue(true);
//   const result = execute();
//   expect(result).toBe("LearningJS");
// });

test("result is false and answer is Learning ReactJS", () => {
  helper.mockReturnValue(false);
  const result = execute();
  expect(result).toBe("Learning ReactJS");
});
