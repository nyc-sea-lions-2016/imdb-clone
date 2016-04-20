var ReviewList = React.createClass({
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  render: function(){
    debugger
      var review = this.props.film
      var reviewNodes = this.props.reviews.map(function(review){
        return (
          <Review key={review.id} review={review}/>
        )
      })
      return (
        <section className='reviews'>
          <h4>Reviews for {this.props.film.name}</h4>
          <ul id='review-list'>
            {reviewNodes}
          </ul>
        </section>
      )
  }
})
