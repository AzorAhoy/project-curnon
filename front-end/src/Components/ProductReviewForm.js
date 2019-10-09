import React, { Component } from 'react';
import '../Assets/ProductGallery.css';

class ProductReviewForm extends Component {
    render() {
        return (
            <div>
                {/* <ProductReviewForm /> */}
                <form className="spr-form">
                    <h3 className="spr-form-title">Write a review</h3>

                    <div className="spr-form-contact-name">
                        <label className="spr-form-label" htmlFor="review_author_1996552077401">Name</label>
                        <input
                            className="spr-form-input spr-form-input-text "
                            id="review_author_1996552077401" type="text"
                            name="review[author]"
                            //value="" 
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="spr-form-review-rating">
                        <label className="spr-form-label" htmlFor="review[rating]">Rating</label>
                        {/* <div className="spr-form-input spr-starrating ">
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="1" aria-label="1 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="2" aria-label="2 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="3" aria-label="3 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="4" aria-label="4 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="5" aria-label="5 of 5 stars">&nbsp;</a>
                                    </div> */}
                    </div>

                    <div className="spr-form-review-title">
                        <label className="spr-form-label" for="review_title_1996552077401">Review Title</label>
                        <input
                            className="spr-form-input spr-form-input-text "
                            id="review_title_1996552077401" type="text"
                            name="review[title]" value="" placeholder="Give your review a title" />
                    </div>

                    <div className="spr-form-review-body">
                        <label className="spr-form-label" for="review_body_1996552077401">
                            Body of Review
                            <span role="status" aria-live="polite" aria-atomic="true">
                                <span className="spr-form-review-body-charactersremaining">(1496)</span>
                                <span className="visuallyhidden">characters remaining</span>
                            </span>
                        </label>
                        <div className="spr-form-input">
                            <textarea 
                                className="spr-form-input spr-form-input-textarea " 
                                id="review_body_1996552077401" 
                                data-product-id="1996552077401" 
                                name="review[body]" 
                                rows="10" 
                                placeholder="Write your comments here" 
                                autoComplete="off"
                            >

                            </textarea>

                        </div>
                    </div>

                    <input type="submit" className="spr-button spr-button-primary button button-primary btn btn-primary" value="Submit Review"></input>
                </form>
            </div>
        );
    }
}

export default ProductReviewForm;