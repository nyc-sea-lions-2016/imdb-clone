var FilmContainer = React.createClass({
  getInitialState: function(){

    return {films: this.props.films, selectedFilm: ''}
  },
  showFilm: function(data){
    // debugger;
    this.props.showFilm(data)
  },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selected && this.state.selected.name
    return(
      <FilmList films={self.state.films} onFilmClick={this.handleFilmClick}/>
    )
  }
})
