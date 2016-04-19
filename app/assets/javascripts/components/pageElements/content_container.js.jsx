var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selected: {name: 'All', id: 9}, selectedFilm: ''}
  },
  componentWillMount: function(){
    this.showCategory();
  },
  showCategory: function(data){
    this.state.selected
    var categoryUrl = '/categories/' + this.state.selected.id
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
    // var self = this;
    var selectedFilm = this.state.selectedFilm && this.state.selectedFilm.name
    var selectedCategory = this.state.selected && this.state.selected.id
    return (
      <div id='content-container'>
        <FilmContainer
        selectedFilm={selectedFilm} selectedCategory={selectedCategory} films={this.state.films} />

      </div>
    );
  }
});
