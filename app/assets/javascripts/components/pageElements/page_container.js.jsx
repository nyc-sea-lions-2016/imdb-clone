var PageContainer = React.createClass({
  getInitialState: function(){
    return {categories: [], selected: {name: 'All', id: 9} }
  },
  componentWillMount: function(){
    this.loadCategoriesFromServer();
  },
  loadCategoriesFromServer: function(){
    $.ajax({
      url: '/categories',
      dataType: 'json',
      method: 'GET',
      success: function(categories){
        categories.unshift({name: 'All', id: 9})
        this.setState({categories: categories, selected: categories[0]});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  showCategory: function(data){
    this.setState({selected: data})
  },
  render: function() {
    var self = this;
    var selectedCategory = this.state.selected && this.state.selected.name
    return (
      <div>
        <LeftNav
          categories={self.state.categories}
          showCategory={self.showCategory}
        />
        <ContentContainer
          selectedCategory={selectedCategory}
        />
      </div>
    );
  }
});
