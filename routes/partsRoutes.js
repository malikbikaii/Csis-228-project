// routes/partsRoutes.js
const express = require('express');
const PartsController = require('../controllers/partsController');
const { validatePart } = require('../Validators/partsValidator');
const router = express.Router();

router.post('/', validatePart, PartsController.createPart);
router.get('/', PartsController.getAllParts);
router.get('/:id', PartsController.getPartById);
router.put('/:id', validatePart, PartsController.updatePart);
router.delete('/:id', PartsController.deletePart);

module.exports = router;
