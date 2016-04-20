var ReviewList = React.createClass({
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
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
        <ul>
          {reviewNodes}
        </ul>
      </div>
    );

  }
});
