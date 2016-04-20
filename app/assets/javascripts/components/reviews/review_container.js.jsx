var ReviewContainer = React.createClass({
  getInitialState: function(){
    return {reviews: [], film: this.props.film}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  handleReviewSubmit: function(newReview){
    $.ajax({
      url: '/reviews',
      dataType: 'json',
      method: 'POST',
      data: newReview,
      success: function(response) {
        var reviews = this.state.reviews
        this.setState({reviews: [response].concat(reviews)})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    });

  },
  render: function(){
    var self = this;
    return(
      <div className='review-container'>
        <h3>Reviews</h3>
        <ReviewForm film={this.props.film} onReviewSubmit={this.handleReviewSubmit}/>
        <ReviewList film={this.state.film} reviews={this.state.reviews}/>
      </div>
    )
  }

})
