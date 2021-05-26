const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Set up workout schema
const WorkoutSchema = new Schema({
    day: {
      type: Date,
      required: true,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true,
          lowercase: true,
        },
        duration: {
          type: Number,
          trim: true,
        },
        weight: {
          type: Number,
          trim: true,
        },
        reps: {
          type: Number,
          trim: true,
        },
        sets: {
          type: Number,
          trim: true,
        },
        distance: {
          type: Number,
          trim: true,
        },
      },
    ],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;