const express = require('express');
const ServicesController = require('../controllers/servicesController');
const router = express.Router();

router.post('/', ServicesController.createService);
router.get('/', ServicesController.getServices);

module.exports = router;
