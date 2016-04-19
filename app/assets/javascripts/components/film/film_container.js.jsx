var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: this.props.films, selectedFilm: ''}
  },
  showFilm: function(data){

    this.props.showFilm(data)
    // return {films: this.props.films, selectedFilm: ''}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({films: nextProps.films})
    this.setState({selectedFilm: nextProps.selectedFilm})
  },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selectedFilm
    if(selectedFilm===""){
      return(
        <FilmList films={self.state.films} showFilm={self.showFilm}/>
      )
    }else{
      return(
      <FilmShow film={selectedFilm}/>
    );
    }
  }
});
