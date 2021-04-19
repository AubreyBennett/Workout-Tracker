const { Router } = require("express");
const { db } = require("../Models/workout.js");
const workout = require("../Models/workout.js");

module.exports = function (app) {
    app.post("/api/workouts/", function (req, res) {
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

    app.put("/api/workouts/:id", function({body, params}, res) {
        db.workout.findByIdAndUpdate(
            params.id,
            {$push: {exercises:body}},
            {new: true, runValidators: true}
        ) .then (dbWorkout => res.json(dbWorkout))
        .catch(error => {
            res.json(error)
        })
    });

    app.get("/api/workouts/range", function (req, res) {
        db.workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch((error) => {
            res.json(error);
        });
    });
};

module.exports = Router;