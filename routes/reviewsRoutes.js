const express = require('express');
const ReviewsController = require('../controllers/reviewsController');
const router = express.Router();

router.post('/', ReviewsController.createReview);
router.get('/:providerId', ReviewsController.getReviewsByProviderId);

module.exports = router;
