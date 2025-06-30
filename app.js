const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://sandy:Ehqk1YWBdWBGDKmf@cluster0.bctfbpk.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");

        // Start the server only after successful connection
        app.listen(5000, () => {
            console.log("Server started on port 5000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

    



//Ehqk1YWBdWBGDKmf