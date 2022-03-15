const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    const devList = ["Backend", "Frontend", "Fullstack", "DEvSEC"];
  res.render("index", { titulo: "TESTE aula", nome: "thiago", devList: devList });
});

app.post("/", function (req, res) {
    res.send("Hello World via post");
});

app.get("/pagina", function (req, res) {
    res.send("pagina 2");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));