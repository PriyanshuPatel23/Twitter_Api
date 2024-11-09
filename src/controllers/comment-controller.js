import commentService from "../services/comment-services.js";

const CommentService = new commentService();

export const createComment = async (req, res) => {
  try {
    const response = await CommentService.create(
      req.query.modelId,
      req.query.modelType,
      req.user.id,
      req.body.content
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully toggled like",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
    });
  }
};
