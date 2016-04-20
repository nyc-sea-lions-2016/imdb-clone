var AllReviewList = React.createClass({
  render: function() {
    var self = this;
    var reviewNodes = this.props.reviews.map(function(review){
      return (
        <FullReview key={review.id} data={review} />
      )
    });

    return (
      <div className='reviewList list-group'>
        <h3>Reviews</h3>
        <ul>
          {reviewNodes}
        </ul>
      </div>
    );
  }
});
