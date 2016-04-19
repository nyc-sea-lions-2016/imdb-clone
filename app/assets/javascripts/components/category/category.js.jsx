var Category = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showCategory(this.props.data.name)
  },
  render: function(){
    debugger
    return (
      <li className='left-nav-button'>
        <a href='#' onClick={this.handleClick}>
          {this.props.data.name}
        </a>
      </li>
    )
  }

})
