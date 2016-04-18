var Category = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showCategory(this.props.data.id)
  },
  render: function(){
    return (
      <li>
        <a onClick={this.handleClick}>
          <span>{this.props.selectedCategory.name}</span>
        </a>
      </li>
    )
  }

})
