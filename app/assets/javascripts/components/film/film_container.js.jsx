var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: this.props.films, selectedFilm: ''}
  },
  showFilm: function(data){
    this.props.showFilm(data)
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({films: nextProps.films, selectedFilm: nextProps.selectedFilm, reviews: nextProps.reviews})
  },
  render: function(){
    var self = this;
    var selectedFilm = this.state.selectedFilm
    var reviews = this.state.reviews
    if (selectedFilm==="" && reviews) {
      return(
        <ReviewList reviews={reviews}/>
      )
    } else if (selectedFilm===""){
      return(
        <FilmList films={self.state.films} showFilm={self.showFilm}/>
      );
    } else {
      return(
        <FilmShow film={selectedFilm}/>
      );
    }
});
