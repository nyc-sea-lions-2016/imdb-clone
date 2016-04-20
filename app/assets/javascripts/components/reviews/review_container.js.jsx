var ReviewContainer = React.createClass({
  getInitialState: function(){
    return {reviews: [], film: this.props.film}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  handleReviewSubmit: function(review){
    // debugger;
  $.ajax({
    url: '/reviews',
    dataType: 'json',
    type: 'POST',
    data: review,
    success: function(response) {
      // debugger;
      $('.reviewList').prepend(response);
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
        <ReviewList film={this.state.film} reviews={this.state.reviews}/>
        <ReviewForm film={this.props.film} onSubmit={this.handleReviewSubmit}/>
      </div>
    )
  }

})
