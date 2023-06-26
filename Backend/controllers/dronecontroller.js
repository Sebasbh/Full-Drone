// controllers/droneController.js

const Drone = require('../models/drone');

// Get all drones
const getAllDrones = async (req, res) => {
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch drones' });
  }
};

// Get a drone by its ID
const getDroneById = async (req, res) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findById(id);
    if (!drone) {
      return res.status(404).json({ error: 'Drone not found' });
    }
    res.json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the drone' });
  }
};

// Create a new drone
const createDrone = async (req, res) => {
  const { name, type, price, image, description } = req.body;
  try {
    const drone = await Drone.create({ name, type, price, image, description });
    res.status(201).json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the drone' });
  }
};

// Update an existing drone
const updateDrone = async (req, res) => {
  const { id } = req.params;
  const { name, type, price, image, description } = req.body;
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      id,
      { name, type, price, image, description },
      { new: true }
    );
    if (!updatedDrone) {
      return res.status(404).json({ error: 'Drone not found' });
    }
    res.json(updatedDrone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the drone' });
  }
};

// Delete an existing drone
const deleteDrone = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDrone = await Drone.findByIdAndRemove(id);
    if (!deletedDrone) {
      return res.status(404).json({ error: 'Drone not found' });
    }
    res.json({ message: 'Drone deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the drone' });
  }
};

module.exports = {
  getAllDrones,
  getDroneById,
  createDrone,
  updateDrone,
  deleteDrone,
};
