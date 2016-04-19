var FilmList = React.createClass({
  handleClick: function(data){
    debugger;
  },
  render: function() {
    var self = this;
    var filmNodes = this.props.films.map(function(film){
      return (
        <Film key={film.id} data={film} onClick={self.handleClick} />
      )
    });

    return (
      <div className='filmList list-group' onClick={this.handleClick}>
        <ul>
          {filmNodes}
        </ul>
      </div>
    );
  }
});
