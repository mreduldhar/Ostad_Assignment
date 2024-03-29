const express = require('express');
const router = require("./routes/route");
const app = new express();
const mongoose = require('mongoose');
require("dotenv").config();

// Security 
const cors = require('cors');
const xss = require("xss-clean");
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");



// middlewares
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit:"50mb", extended: false}));

// rate limiter 
const limiter = ratelimit({windowMs: 15*60*1000, max:80, standardHeaders: true});
app.use(limiter);

const port = process.env.PORT || 8000;


// connect to MongoDB 
mongoose.connect(process.env.DATABASE, {autoIndex: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        })
    })
    .catch((err) => console.log(err));


// router
app.use("/api/v1", router);


app.use("*", (req, res) => {
    res.status(404).json({
        status: "failed",
        msg: "Wrong URL",
    });
});
