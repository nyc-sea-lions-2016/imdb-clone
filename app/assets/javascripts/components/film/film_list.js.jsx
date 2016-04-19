var FilmList = React.createClass({
  showFilm: function(data){
    this.props.showFilm(data)
  },
  render: function() {
    var self = this;
    var filmNodes = this.props.films.map(function(film){
      return (
        <Film key={film.id} data={film} showFilm={self.showFilm} />
      )
    });

    return (
      <div className='filmList list-group' showFilm={this.handleClick}>
        <h3>Films</h3>
        <ul>
          {filmNodes}
        </ul>
      </div>
    );
  }
});
