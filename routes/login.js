const express = require("express");
const ActiveDirectory = require("activedirectory");
const config = require("../config");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("login");
});
router.post(
    "/",
    (req, res) =>
        // A dummy code to always login. You need to replace this with your own code to authenticate.
        // A sample login using ldap is commented below
        req.logIn(req.body.username, err3 => {
            if (err3) {
                const error = `ERROR: ${JSON.stringify(err3)}`;
                console.error(error);
                req.flash("error", "Failed to login");
                return res.redirect("/login");
            }
            return res.redirect("/");
        })
    // const c = {
    //     url: config.auth.ldapUrl,
    //     baseDN: config.auth.baseDN,
    //     username: req.body.username,
    //     password: req.body.password
    // };
    // const ad = new ActiveDirectory(c);
    // ad.authenticate(c.username, c.password, (err, auth) => {
    //     if (err) {
    //         const error = `ERROR: ${JSON.stringify(err)}`;
    //         console.error(error);
    //         req.flash("error", "Wrong username or password");
    //         return res.redirect("/login");
    //     }
    //     if (!auth) {
    //         const error = "Wrong username or password";
    //         req.flash("error", error);
    //         return res.redirect("/login");
    //     }
    //     return ad.findUser(req.body.username, (err2, user) => {
    //         if (err2) {
    //             const error = `ERROR: ${JSON.stringify(err2)}`;
    //             console.error(error);
    //             req.flash(
    //                 "error",
    //                 `Could not find ${req.body.username} in LDAP directory`
    //             );
    //             return res.redirect("/login");
    //         }
    //         return req.logIn(user, err3 => {
    //             if (err3) {
    //                 const error = `ERROR: ${JSON.stringify(err3)}`;
    //                 console.error(error);
    //                 req.flash("error", "Failed to login");
    //                 return res.redirect("/login");
    //             }
    //             return res.redirect("/");
    //         });
    //     });
    // });
);

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
});

module.exports = router;
