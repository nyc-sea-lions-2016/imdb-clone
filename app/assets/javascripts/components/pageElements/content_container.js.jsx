var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selected: {name: 'All', id: 9}}
  },
  componentWillMount: function(){
    this.showCategory();
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
  render: function() {
    var self = this;
    var selectedCategory = this.state.selected && this.state.selected.id
    return (
      <div id='content-container'>
        <FilmContainer selectedCategory={selectedCategory} films={self.state.films} />
      </div>
    );
  }
});
