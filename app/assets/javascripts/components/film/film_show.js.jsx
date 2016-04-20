var FilmShow = React.createClass({
  getInitialState: function(){
    return {reviews: this.props.reviews}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  render: function(){
    var film = this.props.film;
    var self =  this;
    return (
      <div className='film-show'>
        <section className='film-info'>
          <h3>{film.name} / Average Rating: {film.rating}</h3>
          <RatingContainer film={film}/>
          <p className='film-year'><strong>Year:</strong> {film.year} </p>
          <p className='film-director'><strong>Director: </strong>{film.director} </p>
          <p className='film-oscars'><strong>Oscar Count: </strong>{film.oscar_count} </p>
          <p className='film-country'><strong>Country: </strong>{film.country} </p>
        </section>
        <section className='film-reviews'>
          <ReviewContainer film={film} reviews={self.state.reviews}/>
        </section>
      </div>
    );
  }
});
