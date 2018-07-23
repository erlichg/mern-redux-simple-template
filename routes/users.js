const express = require("express");

const router = express.Router();

function users(db) {
    /* GET users listing. */
    router.get("/", (req, res, next) => {
        db.collection("users")
            .find()
            .toArray((err, result) => {
                if (err) {
                    console.error(err);
                    return res.json([]);
                }
                return res.json(result);
            });
    });
    router.post("/", (req, res, next) => {
        const { name } = req.body;
        db.collection("users").insertOne({ name }, (err, resp) => {
            if (err) {
                console.error(err);
                return res.status(505).send(`Failed to insert object: ${err}`);
            }
            return res.json(resp.ops[0]);
        });
    });
    return router;
}

module.exports = users;
