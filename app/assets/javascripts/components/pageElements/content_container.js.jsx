var ContentContainer = React.createClass({
  getInitialState: function(){
    return {categories: []}
  },
  componentWillMount: function(){
    this.loadCategoriesFromServer()
  },
  loadCategoriesFromServer: function(){
    $.ajax({
      url: '/categories',
      dataType: 'json',
      method: 'GET',
      success: function(categories){
        this.setState({categories: categories, selected: categories[0]});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  showCategory: function(data){
    var selected = this.state.categories.filter(function(object){
      return object.id == data
    });
    this.setState({selected: selected[0]})
  },
  render: function() {
    var self = this;
    var selectedCategory = this.state.selected && this.state.selected.name
    return (
      <div id='content-container'>
        <CategoriesContainer    categories={self.state.categories} selectedCategory={selectedCategory}/>
        <FilmContainer />
      </div>
    );
  }
});
