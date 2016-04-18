var CategoriesContainer = React.createClass({
  showCategory: function(data){
    this.props.showCategory(data)
  },
  render: function() {
    var categoryNodes = this.props.categories.map(function(category){
      return (
        <Category key={category.id} data={category} showCategory={self.showCategory}/>
      )
    })
    return (
      <section className='categories-container'>
        <h3>CATEGORIES</h3>
          <ul>
            {categoryNodes}
          </ul>
      </section>
    );
  }
});
