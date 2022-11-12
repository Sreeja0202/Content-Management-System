const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const oid = require("mongoose").Types.ObjectId;
const urouter = express.Router();
const User = require("../models/users.models.js");

const app = express();

app.use(express.json());
app.use(cors());

module.exports = urouter;
