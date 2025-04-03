class Review {
    constructor(reviewId, orderId, providerId, rating, reviewText, reviewDate) {
        this.reviewId = reviewId;
        this.orderId = orderId;
        this.providerId = providerId;
        this.rating = rating;
        this.reviewText = reviewText;
        this.reviewDate = reviewDate;
    }

    static fromRow(row) {
        return new Review(
            row.review_id,
            row.order_id,
            row.provider_id,
            row.rating,
            row.review_text,
            row.review_date
        );
    }
}

module.exports = Review;
