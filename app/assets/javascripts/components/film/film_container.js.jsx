var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: this.props.films, selectedFilm: '', reviews: []}
  },
  showFilm: function(data){
    this.props.showFilm(data)
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({films: nextProps.films})
    this.setState({selectedFilm: nextProps.selectedFilm})
    if(nextProps.selectedFilm != ''){
      this.loadReviewsFromServer(nextProps.selectedFilm)
    };
  },
  loadReviewsFromServer: function(film){
    var url = '/films/' + film.id + '/reviews'
    $.ajax({
      url: url,
      dataType: 'json',
      method: 'GET',
      success: function(reviews){
        debugger;
        this.setState({reviews: reviews})
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    })
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
      <FilmShow film={selectedFilm} reviews={this.state.reviews}/>
    );
    }
  }
});
