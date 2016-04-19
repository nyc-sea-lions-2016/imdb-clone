var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selected: {name: 'All', id: 9}, selectedFilm: ''}
  },
  componentWillMount: function(){
    this.showCategory();
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({selectedCategory: nextProps.selectedCategory})
  },
  showCategory: function(){
    var categoryUrl = '/categories/' + this.state.selected.id
    $.ajax({
      url: categoryUrl,
      dataType: 'json',
      method: 'GET',
      success: function(films){
        console.log(films)
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
    var selectedCategory = this.state.selected && this.state.selected.id

    return (
      <div id='content-container'>

        <FilmContainer
        selectedFilm={selectedFilm} selectedCategory={selectedCategory}
        showFilm={this.showFilm}
        films={this.state.films} />


      </div>
    );
  }
});
