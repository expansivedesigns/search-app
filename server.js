const express = require('express');
const app = express();
const axios = require("axios");
const router = require("express").Router()
const cors = require("cors");

const port = process.env.PORT || '3000';

app.use(cors());

// Set public folder as root
app.use(express.static(__dirname + '/public'));

// Allow front-end access to node_modules folder
app.use('/', express.static(`${__dirname}/node_modules/`));

router.get("/", (req, res) => {   
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })   
    res.render("results"); 
}); 

app.use("/results", require('./'));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`);
});

module.exports = router;
