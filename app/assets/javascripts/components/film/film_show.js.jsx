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
          <h3>{film.name}</h3>
          <span className='film-year'>Year: {film.year}, </span>
          <span className='film-director'>Director: {film.director}, </span>
          <span className='film-oscars'>Oscar Count: {film.oscar_count}, </span>
          <span className='film-country'>Country: {film.country} </span>
        </section>
        <section className='film-reviews'>
          <ReviewContainer film={film} reviews={self.state.reviews}/>
        </section>
      </div>
    );
  }
});
