const ReviewsRepository = require('../Repositories/reviewsRepository');

class ReviewsService {
    static async createReview(review) {
        try {
            return await ReviewsRepository.createReview(review);
        } catch (error) {
            throw new Error("Error creating review: " + error.message);
        }
    }

    static async getReviewsByProviderId(providerId) {
        try {
            return await ReviewsRepository.getReviewsByProviderId(providerId);
        } catch (error) {
            throw new Error("Error fetching reviews: " + error.message);
        }
    }
}

module.exports = ReviewsService;
