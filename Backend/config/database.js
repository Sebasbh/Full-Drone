const mongoose = require('mongoose');
const Drone = require('../models/drone');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tienda_drones', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    // Imprimir todos los drones
    const drones = await Drone.find();
    console.log(drones);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = connectToDatabase;



