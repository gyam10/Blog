const PostModel = require("../model/post.model");

export const createPost = async (req, res, next) => {
  try {
    const post = await new PostModel(req.body);
    post.save();

    res.json({
      status: true,
      result: post,
      msg: "Post created successfully",
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      res.json({
        status: 404,
        msg: "Post not found",
      });
    }
    const result = await PostModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json({
      status: true,
      result: result,
      msg: "Post updated sucessfully",
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id);
    await post.delete();
    res.json({
      status: true,
      result: post,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    next({
      msg: error,
      status: 500,
    });
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id);
    res.json({
      status: true,
      msg: "Post fetched sucessfully",
      result: post,
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};

export const getAllPost = async (req, res, next) => {
  let username = req.query.username;
  let category = req.query.category;
  let posts;
  try {
    if (username) {
      posts = await PostModel.find({
        username: username,
      });
    } else if (category) {
      posts = await PostModel.find({ categories: category });
    } else {
      posts = await PostModel.find({});
    }
    res.json({
      status: true,
      result: posts,
      msg: "All posts fetched sucesssfully",
    });
  } catch (error) {
    next({
      status: 500,
      msg: error,
    });
  }
};
