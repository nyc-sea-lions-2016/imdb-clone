var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selected: {name: 'all'}}
  },
  showCategory: function(data){
    var selected = this.state.categories.filter(function(object){
      return object.id == data
    });
    this.setState({selected: selected[0]})
  },
  showFilm: function(data){
    this.setState({selectedFilm: data})
  },
  render: function() {
    var self = this;
    var selectedFilm = this.state.selectedFilm && this.state.selectedFilm.name
    var selectedCategory = this.state.selected && this.state.selected.name
    return (
      <div id='content-container'>
        <FilmContainer selectedFilm={selectedFilm} selectedCategory={selectedCategory}/>
      </div>
    );
  }
});
