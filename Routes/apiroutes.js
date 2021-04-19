const { Router } = require("express");
const workout = require("../Models/workout.js");

module.exports = function (app) {
    app.post("/api/workouts", function (req, res) {
        db.workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch((error) => {
            res.json(error);
        });
    });

    app.get("/api/workouts", function (req, res) {
        db.workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch((error) => {
            res.json(error);
        });
    });


};

module.exports = Router;