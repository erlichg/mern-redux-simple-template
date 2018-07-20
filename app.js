const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const compression = require("compression");
const mongodb = require("mongodb");
const flash = require("flash");
const config = require("./config");

const app = express();

const clientapp = express();
clientapp.use(session({ secret: "cats" }));
clientapp.use(bodyParser.json({ limit: "20mb" }));
clientapp.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
clientapp.use(cookieParser());
clientapp.use(express.static(path.join(__dirname, "public")));
clientapp.use(passport.initialize());
clientapp.use(passport.session());
// view engine setup
clientapp.set("views", path.join(__dirname, "views"));
clientapp.set("view engine", "jade");
clientapp.use(flash());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const loginRouter = require("./routes/login");

clientapp.use("/login", loginRouter);
const auth = (req, res, next) => {
    if (!req.isAuthenticated() && req.url !== "/login") {
        console.info("Got unauthenticated call. Redirecting to /login");
        return res.redirect("/login");
    }
    return next();
};
clientapp.use(auth, express.static(path.join(__dirname, "client/build")));

mongodb.MongoClient.connect(
    config.mongoURL,
    (err, client) => {
        if (err) throw err;

        const db = client.db(config.db);
        const indexRouter = require("./routes/index")(db);
        const usersRouter = require("./routes/users")(db);

        app.use(logger("dev"));
        app.use(compression());
        app.use(session({ secret: "cats" }));
        app.use(bodyParser.json({ limit: "20mb" }));
        app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, "public")));

        app.use("/api", indexRouter);
        app.use("/api/users", usersRouter);

        // catch 404 and forward to error handler
        app.use((req, res, next) => {
            next(createError(404));
        });

        // error handler
        app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === "development" ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render("error");
        });
    }
);

module.exports = {
    server: app,
    client: clientapp
};
