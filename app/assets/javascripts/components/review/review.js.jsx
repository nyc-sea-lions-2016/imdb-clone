var Review = React.createClass({
  render: function(){

    return(
      <li>
        <p>{this.props.data.user}</p>
        <p>{this.props.data.content}</p>
      </li>
    )
  }
})
