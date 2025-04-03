const express = require('express');
const ServiceProvidersController = require('../controllers/serviceProvidersController');
const router = express.Router();

router.post('/', ServiceProvidersController.createServiceProvider);
router.get('/', ServiceProvidersController.getServiceProviders);

module.exports = router;
