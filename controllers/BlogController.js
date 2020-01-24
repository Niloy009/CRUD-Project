const axios = require("axios");
const db = require("../utilitis/db");
const date = require("date-and-time");
const uuid = require("uuid");

const BlogList = (req, res) => {
  let posts = db.get("blogs");
  res.render("index", { posts });
};

const Create = (req, res) => {
  res.render("pages.create");
};

const SingleBlog = (req, res) => {
  let blog = db.get("blogs").find({ id: req.params.id });
  res.render("pages.singleBlog", { blog: blog.toJSON() });
};

const SaveBlogs = (req, res) => {
  const now = new Date();
  const time = date.format(now, "YYYY/MM/DD HH:mm:ss");
  db.get("blogs")
    .push({
      id: uuid.v4(),
      title: req.body.title,
      body: req.body.description,
      time
    })
    .write();
  res.redirect("/");
};

const DeleteBlog = (req, res) => {
  db.get("blogs")
    .remove({ id: req.params.id })
    .write();

  res.redirect("/");
};

const UpdateBlog = (req, res) => {
  let blog = db.get("blogs").find({ id: req.params.id });
  res.render("pages.update", { blog: blog.toJSON() });
};

const UpdateSave = (req, res) => {
  const now = new Date();
  const time = date.format(now, "YYYY/MM/DD HH:mm:ss");
  db.get("blogs")
    .find({ id: req.params.id })
    .assign({ title: req.body.title, body: req.body.description, time })
    .write();
  res.redirect("/");
};

module.exports = {
  BlogList,
  Create,
  SaveBlogs,
  SingleBlog,
  DeleteBlog,
  UpdateBlog,
  UpdateSave
};
