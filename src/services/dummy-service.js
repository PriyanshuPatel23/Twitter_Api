import { helper } from "./helper-service.js";
export const execute = () => {
  const result = helper();
  if (result) {
    return "LearningJS";
  } else {
    return "Learning ReactJS";
  }
};
