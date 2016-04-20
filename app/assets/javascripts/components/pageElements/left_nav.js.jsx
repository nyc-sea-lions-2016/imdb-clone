var LeftNav = React.createClass({
  showCategory: function(data){
    this.props.showCategory(data)
  },
  handleClick: function(e){
    e.preventDefault();
    this.props.showReviews(true)
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
              <li><a href='#' onClick={this.handleClick} className='left-nav-button'> Reviews </a></li>
            </ul>
          </div>
      </div>
    );
  }
});
