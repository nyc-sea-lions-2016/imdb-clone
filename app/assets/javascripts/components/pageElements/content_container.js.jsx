var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selectedFilm: ''}
  },
  componentWillMount: function(){
    this.showCategory();
  },
  componentWillReceiveProps: function(nextProps){
    console.log(nextProps)
    this.showCategory(nextProps.selectedCategory);
  },
  showCategory: function(category){
    console.log("Category", category)
    var categoryUrl = '/categories/' + (category || 9)
    $.ajax({
      url: categoryUrl,
      dataType: 'json',
      method: 'GET',
      success: function(films){
        this.setState({films: films});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  showFilm: function(data){
    this.setState({selectedFilm: data})
  },
  render: function() {
    var selectedFilm = this.state.selectedFilm

    return (
      <div id='content-container'>
        <FilmContainer
        selectedFilm={selectedFilm}
        showFilm={this.showFilm}
        films={this.state.films} />
      </div>
    );
  }
});
