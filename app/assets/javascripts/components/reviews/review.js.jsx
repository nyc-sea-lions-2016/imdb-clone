var Review = React.createClass({
  render: function(){
    debugger;
    var reviewContent = this.props.data.content
    var reviewCreatedAt = this.props.data.created_at
    var user = this.props.data.user
    var comments = ["There are no comments for this review!"]
    return(
      <li className='review'>
        <div className="media well well-lg">
          <div className='media-left'>
            <a href="#"><img id='review-image' className='media-object' src="https://www.givingfire.com/assets/marketing/man1.png" alt="movie review image"/></a>
          </div>
          <div className="media-body">
            <p>{reviewContent}</p>
            <p>Posted on: {reviewCreatedAt} by {user}</p>
            <p>Is this review userful? Tell the reviewer how you feel: <a href='#' onClick={this.upVote}>Vote up</a> | <a href='#' onClick={this.downVote}>Vote Down</a></p>
          </div>
        </div>
        <div className='comment-area'>
          <h5>Comments:</h5>
          <p>{comments[0]}</p>
          <div className='form-group'>
            <textarea className="form-control" rows="3" id='comment' placeholder="Leave a comment"></textarea>
            <button className='btn btn-default' type='button'>Submit</button>
          </div>
        </div>
      </li>
    )
  }
})
