const express = require("express");
const app = express();
const BlogRouter = require("./routes/blogs");

//edge setup
const { config, engine } = require("express-edge");
config({ cache: process.env.NODE_ENV === "production" });
app.use(engine);
app.set("views", `${__dirname}/views`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup static file
app.use(express.static("public"));

app.use(BlogRouter);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
// app.get("/", async (req, res) => {
//   let { data: posts } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   res.render("index", { posts });
// });
// app.get("/about", (req, res) => {
//   res.render("pages.about");
// });
// app.get("/contact", (req, res) => {
//   res.render("pages.contact");
// });
// app.get("/services", (req, res) => {
//   res.render("pages.services");
// });
app.all("*", (req, res) => {
  res.render("pages.404");
});
