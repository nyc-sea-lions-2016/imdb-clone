var Category = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showCategory(this.props.data.id)
  },
  render: function(){
    return (
      <li >
        <a href='#' onClick={this.handleClick} className='left-nav-button'>
          {this.props.data.name}
        </a>
      </li>
    )
  }

})
