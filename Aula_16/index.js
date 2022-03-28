const express = require("express");
const path = require("path");
require('dotenv').config();
const Filme = require("./model/filmes");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const filmes = await Filme.findAll();
  console.log(filmes);
  console.log(typeof(filmes));
  res.render("index", {
    filmes,
  });
});

app.listen(port || process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${port}`));