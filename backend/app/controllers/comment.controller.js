const CommentModel = require("../model/comment.model");

const newComment = async (req, res, next) => {
  try {
    const comment = await new CommentModel(req.body);
    comment.save();
    res.json({
      status: true,
      msg: "Comment Successfully added",
      result: comment,
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

const getComments = async (req, res, next) => {
  try {
    const comment = await CommentModel.find({ postId: req.params.id });
    res.json({
      status: true,
      result: comment,
      msg: "Comment fetched successfully",
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    await comment.delete();

    res.json({
      status: 200,
      msg: "Comment Deleted successfully",
      result: comment,
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

module.exports = {
  newComment,
  getComments,
  deleteComment,
};
