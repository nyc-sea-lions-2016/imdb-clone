var Category = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showCategory(this.props.data.name)
  },
  render: function(){
    debugger
    return (
      <li className='list-group-item'>
        <a onClick={this.handleClick}>
          <span>{this.props.data.name}</span>
        </a>
      </li>
    )
  }

})
