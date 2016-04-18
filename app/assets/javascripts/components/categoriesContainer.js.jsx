var CategoriesContainer = React.createClass({
  showCategory: function(data){
    this.props.showCategory(data)
  },
  render: function() {
    debugger
    var categoryNodes = this.props.categories.map(function(category){
      return (
        <Category key={category.name} data={category} showCategory={self.showCategory}/>
      )
    })
    return (
      <section className='categories-container list-group'>
        <h3>CATEGORIES</h3>
          <ul>
            {categoryNodes}
          </ul>
      </section>
    );
  }
});
