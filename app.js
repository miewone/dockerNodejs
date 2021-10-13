const express = require("express");
const app = express();

const home = (req, res, next) => {
    res.send("hi");
};

app.get("/", home);

app.listen(3000, () => {
    console.log("hellow world");
});
