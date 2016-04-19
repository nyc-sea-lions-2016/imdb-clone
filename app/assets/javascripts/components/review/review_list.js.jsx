var ReviewList = React.createClass({
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  render: function(){
      var film = this.props.film
      var reviewNodes = this.props.reviews.map(function(review){

        return (
          <Review key={review.id} data={review} film={film}/>
        )
      })
      return (
        <section className='reviews'>
          <h4>Reviews for {this.props.film.name}</h4>
          <ul>
            {reviewNodes}
          </ul>
        </section>
      )
  }
})
