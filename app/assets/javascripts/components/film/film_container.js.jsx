var FilmContainer = React.createClass({
  getInitialState: function(){
<<<<<<< HEAD

    return {films: this.props.films, selectedFilm: ''}
  },
  showFilm: function(data){
    // debugger;
    this.props.showFilm(data)
    return {films: this.props.films, selectedFilm: ''}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({films: nextProps.films})

  },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selected && this.state.selected.name
    return(
      <FilmList films={self.state.films} onFilmClick={this.handleFilmClick}/>
    )
  }
})
