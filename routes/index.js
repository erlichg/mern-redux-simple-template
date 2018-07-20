const express = require("express");

const router = express.Router();

function index(db) {
    /* GET home page. */
    router.get("/", (req, res, next) => {
        res.render("index", { title: "Express" });
    });
    return router;
};

module.exports = index;
