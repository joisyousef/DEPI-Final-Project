const {Blog} =  require("../models/Blog.js");

const getBlogs = async function (request, response, next) {
  try {
    const blogs = await Blog.find();
    response.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: "No Blogs Found",
    });
  }
};

const getBlog = async function (request, response, next) {
  const id = request.params.id;

  try {
    const blog = await Blog.findById(id);
    response.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: `No Blog Found with that id: ${getBlog}`,
    });
  }
};

const createBlog = async function (request, response, next) {
  const { title, description, imageUrl } = request.body;

  try {
    const newBlog = await Blog.create({ title, description, imageUrl });
    response.status(201).json({
      status: "success",
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const updateBlog = async function (request, response, next) {
  const id = request.params.id;
  const newData = request.body;

  try {
    const blog = await Blog.findByIdAndUpdate(id, newData, {
      runValidators: true,
    });
    response.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteBlog = async function (request, response, next) {
  const id = request.params.id;

  try {
    await Blog.findByIdAndDelete(id);
    response.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
};
