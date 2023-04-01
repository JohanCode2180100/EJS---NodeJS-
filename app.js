const express = require("express");
const app = express();
const port = 3000;
const posts_articles = require("./articles");

app.set("view engine", "ejs");
app.use("/static", express.static("public"));

//avec views engine ejs pas besoin de specifier les routes , par defaut il
//va chercher dans le dossier views
app.get("/", (req, res) => {
  //   const template = path.join(__dirname, "/views/home.ejs");
  //   const data = {};
  //   const option = {};

  //   //str genere le contenu du html
  //   ejs.renderFile(template, data, option, (err, str) => {
  //     res.send(str);
  //   });
  res.render("pages/home");
});

//rendre la route dynamique

app.get("/hello/:name", (req, res) => {
  const data = { name: req.params.name };
  res.render("pages/hello", data);
});

app.get("/posts", (req, res) => {
  //on passe comme donnee notre tableau posts_articles
  res.render("pages/posts-list", { posts: posts_articles.articles });
});

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
