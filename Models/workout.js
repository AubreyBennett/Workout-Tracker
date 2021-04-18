const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter your exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Please enter your exercise type"
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                Required: "Please enter your exercise duration"
            },
            distance: {
                type: Number,
            }
        }
    ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;