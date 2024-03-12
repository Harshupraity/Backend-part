const express = require('express');
const router = express.Router();

const categoryHandler = require("../controllers/categorycontroller")

router.route("/")
    .get(categoryHandler);

module.exports = router;