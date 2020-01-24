const Router = require("express").Router();

const {
  BlogList,
  Create,
  SaveBlogs,
  SingleBlog,
  DeleteBlog,
  UpdateBlog,
  UpdateSave
} = require("../controllers/BlogController");

Router.get("/", BlogList);
Router.get("/create", Create);
Router.get("/:id", SingleBlog);
Router.post("/blogs/", SaveBlogs);
Router.get("/delete/:id", DeleteBlog);
Router.get("/update/:id", UpdateBlog);
Router.post("/blogs/update/:id", UpdateSave);

module.exports = Router;
