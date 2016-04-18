var FilmContainer = React.createClass({

  render: function() {
    var filmNodes = this.props.data.map(function(film){
      return (
        <Film key={film.id} name={film.name}>
        </Film>
      )
    })
    return (
      <div className='film-container'>
      {filmNodes}
      </div>
    );
  }
});
