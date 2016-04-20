var RatingContainer = React.createClass({
  getInitialState: function(){
    return {film: this.props.film}
  },
  render: function(){
    return (
      <section className='rating-container'>
        <NewRating film={film}/>
      </section>
    )
  }
})
