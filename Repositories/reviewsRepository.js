const db = require('../config/db');
const Review = require('../models/reviewsModel');

class ReviewsRepository {
    static async createReview(reviewData) {
        try {
            const query = `
                INSERT INTO reviews (order_id, provider_id, rating, review_text, review_date)
                VALUES (?, ?, ?, ?, ?)
            `;
            const result = await db.execute(query, [
                reviewData.orderId,
                reviewData.providerId,
                reviewData.rating,
                reviewData.reviewText,
                reviewData.reviewDate
            ]);
            return result.insertId;
        } catch (error) {
            throw new Error("Error creating review: " + error.message);
        }
    }

    static async getReviewsByProviderId(providerId) {
        try {
            const query = "SELECT * FROM reviews WHERE provider_id = ?";
            const rows = await db.query(query, [providerId]);
            return rows.map(Review.fromRow);
        } catch (error) {
            throw new Error("Error fetching reviews: " + error.message);
        }
    }
}

module.exports = ReviewsRepository;
