// models/drone.js

const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Drone = mongoose.model('Drone', droneSchema, 'drones');

module.exports = Drone;
