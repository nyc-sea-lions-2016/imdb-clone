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
        this.setState({films: films})
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
  },
  //loadRatingsFromServer: function(){
    //TODO(jmaguire)add ajax call to get the average rating of each film to display next to the names
  //},
  render: function(){
    var self = this;
    return(
      <FilmList films={self.state.films}/>
    )
  }
})
