var ReviewList = React.createClass({
  getInitialState: function(){
    return {reviews: [], film: this.props.film}
  },
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
        <ul>
          {reviewNodes}
        </ul>
      </div>
    );

  }
});
