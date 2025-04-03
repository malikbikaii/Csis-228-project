const ReviewsService = require('../services/reviewsService');

class ReviewsController {
    static async createReview(req, res) {
        try {
            const { orderId, providerId, rating, reviewText, reviewDate } = req.body;
            const result = await ReviewsService.createReview({ orderId, providerId, rating, reviewText, reviewDate });
            res.status(201).json({ message: "Review created successfully", result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getReviewsByProviderId(req, res) {
        try {
            const { providerId } = req.params;
            const reviews = await ReviewsService.getReviewsByProviderId(providerId);
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ReviewsController;
