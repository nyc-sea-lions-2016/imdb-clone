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
        this.setState({films: films, selected: films[0]});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
  },
  showFilm: function(data){
    var selected = this.state.films.filer(function(object){
      return object.id == data
    });
    this.setState({selected: selected[0]})
  },
  // handleFilmClick: function(){
  //   render: function(){
  //     this.showFilm()
  //   }
  // },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selected && this.state.selected.name
    return(
      <FilmList films={self.state.films}/>
    )
  }
})
