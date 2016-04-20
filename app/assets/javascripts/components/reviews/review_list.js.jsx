var ReviewList = React.createClass({
  getInitialState: function(){
    return {reviews: [], film: this.props.film}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  handleReviewSubmit: function(review){
    debugger;
    $.ajax({
      url: '/reviews',
      dataType: 'json',
      type: 'POST',
      data: review,
      success: function(response) {
        $('.reviewList').prepend(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    });
  },
  render: function(){
      //var review = this.props.film
      var reviewNodes = this.props.reviews.map(function(review){
        return (
          <Review key={review.id} data={review}/>
        )
      })
    return (
      <div className='reviewList list-group'>
        <h3>Reviews</h3>
        <ReviewForm film={this.props.film} onReviewSubmit={this.handleReviewSubmit}/>
        <ul>
          {reviewNodes}
        </ul>
      </div>
    );

  }
});
