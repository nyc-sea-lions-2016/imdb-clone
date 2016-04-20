var Review = React.createClass({
  render: function(){
    var reviewContent = this.props.data.content
    var reviewCreatedAt = this.props.data.created_at
    return(
      <li>
        <p>{reviewContent}</p>
        <p>Created at: {reviewCreatedAt}</p>
      </li>
    )
  }
})
