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
        this.setState({films: films, selectedFilm: null});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
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
