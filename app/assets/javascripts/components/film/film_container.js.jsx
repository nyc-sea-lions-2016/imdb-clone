var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: []}
  },
  componentWillMount: function(){
    this.loadFilmsFromServer()
  },
  loadFilmsFromServer: function(){
    $.ajax({
      url:'/films',
      dataType: 'json',
      method: 'GET',
      success: function(films){
        this.setState({films: films, selectedFilm: films[0]});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
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
