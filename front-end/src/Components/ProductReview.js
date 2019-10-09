import React, { Component } from 'react';
import '../Assets/ProductReview.css';

class ProductReview extends Component {
    
    render() {
        const comment = this.props.comment;
        console.log(comment.user);
        return (
            <div className="spr-review" id="spr-review-75363970">
                <div className="spr-review-header">
                    <span className="spr-starratings spr-review-header-starratings" aria-label="4 of 5 stars" role="img">
                        <i className="spr-icon spr-icon-star"></i>
                        <i className="spr-icon spr-icon-star"></i>
                        <i className="spr-icon spr-icon-star"></i>
                        <i className="spr-icon spr-icon-star"></i>
                        <i className="spr-icon spr-icon-star-empty"></i>
                    </span>
                    <h3 className="spr-review-header-title">Sẽ Ủng Hộ..</h3>
                    <span className="spr-review-header-byline">
                        <strong>{comment.user.username}</strong> on <strong>{comment.createdAt}</strong>
                    </span>
                </div>

                <div className="spr-review-content">
                    <p className="spr-review-content-body">{comment.content}</p>
                </div>
                <div className="spr-review-footer">
                    <a 
                        href="#" className="spr-review-reportreview" 
                        onClick={null} id="report_75363970" 
                        data-msg="This review has been reported"
                    >Report as Inappropriate</a>
                </div>
            </div>
        );
    }
}

export default ProductReview;