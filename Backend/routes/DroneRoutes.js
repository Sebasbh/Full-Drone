const express = require('express');
const router = express.Router();

const droneController = require('../controllers/dronecontroller');
const authenticateUser = require('../middleware/authentication');

// GET /drones
router.get('/drones', droneController.getAllDrones);

// GET /drones/:id
router.get('/drones/:id', droneController.getDroneById);

// POST /drones
router.post('/drones', authenticateUser, droneController.createDrone);

// PUT /drones/:id
router.put('/drones/:id', authenticateUser, droneController.updateDrone);

// DELETE /drones/:id
router.delete('/drones/:id', authenticateUser, droneController.deleteDrone);

module.exports = router;
