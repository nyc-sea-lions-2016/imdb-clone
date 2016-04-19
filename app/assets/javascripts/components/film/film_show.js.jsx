var FilmShow = React.createClass({
  // getInitialState: function(){
  //   return {selected: null}
  // },
  render: function(){
    var film = this.props.film
    return (
      <section className='film-show'>
        <h3>{film.name}</h3>
        <span className='film-year'>Year: {film.year}, </span>
        <span className='film-director'>Director: {film.director}, </span>
        <span className='film-oscars'>Oscar Count: {film.oscar_count}, </span>
        <span className='film-country'>Country: {film.country} </span>
      </section>
    );
  }
});
