const { MongoClient } = require("mongodb");
const cors = require("cors");

require('dotenv').config();
const uri = process.env.URI;
const client = new MongoClient(uri);

