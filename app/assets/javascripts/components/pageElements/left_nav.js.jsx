var LeftNav = React.createClass({
  handleClick: function(){

  },
  showCategory: function(data){
    this.props.showCategory(data)
  },
  render: function() {
    var categoryNodes = this.props.categories.map(function(category){
      return (
        <Category key={category.name} data={category} clicked={self.showCategory}/>
      )
    })
    return (

      <div id="sidebar" role="navigation">
          <div id="sidebar-nav">
            <ul className="nav nav-stacked">
              {categoryNodes}
            </ul>
          </div>
      </div>

    );
  }
});
