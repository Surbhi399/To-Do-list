import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("C:/Users/jains/OneDrive/Desktop/MY TODO LIST/to-do list/view/index.ejs");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


  