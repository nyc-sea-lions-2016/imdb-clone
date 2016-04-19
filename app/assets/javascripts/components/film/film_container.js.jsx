var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: this.props.films, selectedFilm: ''}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({films: nextProps.films})
  },
  // showFilm: function(data){
  //   var selected = this.state.films.filer(function(object){
  //     return object.id == data
  //   });
  //   this.setState({selected: selected[0]})
  // },
  // handleFilmClick: function(){
  //   render: function(data){
  //     var selectedFilm = this.state.films.filter(function(object){
  //       return object.id == data
  //     });
  //     this.setState({selectedFilm: selectedFilm[0]})
  //
  //     })
  //   }
  // },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selected && this.state.selected.name
    return(
      <FilmList films={self.state.films} onFilmClick={this.handleFilmClick}/>
    )
  }
})
