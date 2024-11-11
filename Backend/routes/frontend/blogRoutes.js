const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/blogController");

const router = express.Router();

router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlog);
router.post("/blogs", createBlog);
router.patch("/blogs/:id", updateBlog);
router.patch("/blogs/:id", deleteBlog);

module.exports = router;
