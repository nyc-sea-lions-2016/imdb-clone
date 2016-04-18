var FilmList = React.createClass({

  render: function() {
    var filmNodes = this.props.films.map(function(film){
      return (
        <Film key={film.id} data={film} />
      )
    });
    return (
      <div className='filmList'>
        {filmNodes}
      </div>
    );
  }
});
