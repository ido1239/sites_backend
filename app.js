const express = require('express');
const PATH = require("path")
const http = require("http");
const cors =require("cors")
const { routerInit } = require('./config/config_routes');
const app = express();

require("./db/connect_mongo");

// kill the guardmen
app.use(cors());
// middleware start
app.use(express.json());
app.use(express.static(PATH.join(__dirname,"public")));
// middleware end

routerInit(app);

const server = http.createServer(app);
let port = process.env.PORT||3000;
console.log(`Running on port ${port}`)
server.listen(port)