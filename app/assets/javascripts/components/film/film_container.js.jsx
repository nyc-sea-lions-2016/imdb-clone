var FilmContainer = React.createClass({
  getInitialState: function(){
    return {films: []}
  },
  componentDidMount: function(){
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
  render: function(){
    var self = this;
    return(
      <FilmList/>
    )
  }
})
