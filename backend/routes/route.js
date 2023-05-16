const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPost,
} = require("../app/controllers/post.controller");

const {
  uploadImage,
  getImage,
} = require("../app/controllers/image.controller");

const {
  login,
  register,
  logoutUser,
} = require("../app/controllers/user.controller");

const {
  newComment,
  getComments,
  deleteComment,
} = require("../app/controllers/comment.controller");

const {
  authenticateToken,
  createNewToken,
} = require("../app/controllers/jwt.controller");

const upload = require("../app/middleware/upload.middleware");

// Routes for login register and logout
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logoutUser);

// Route for new token
router.post("/token", createNewToken);

// Routes for posting blogs
router.post("/create", authenticateToken, createPost);
router.put("/update/:id", authenticateToken, updatePost);
router.delete("/delete/:id", authenticateToken, deletePost);

router.get("/post/:id", authenticateToken, getPost);
router.get("/posts", authenticateToken, getAllPosts);

// Routes for files/images

router.post("/post/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

// routes for Comments
router.post("/comment/new", authenticateToken, newComment);
router.get("/comment/:id", authenticateToken, getComments);
router.delete("/comment/delete/:id", authenticateToken, deleteComment);

module.exports = router;
