var LeftNav = React.createClass({
  showCategory: function(data){
    this.props.showCategory(data)
  },
  render: function() {
    var self = this;
    var categoryNodes = this.props.categories.map(function(category){
      return (
        <Category key={category.id} data={category} showCategory={self.showCategory}/>
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
