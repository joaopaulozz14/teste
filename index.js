import express from 'express';
const app = express();

const lista =[
    {
        nome: "Júlia",
        idade: 30,
        nascimento: "Goiás"
    }
]
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render("index", {lista});
});

app.listen(4000);