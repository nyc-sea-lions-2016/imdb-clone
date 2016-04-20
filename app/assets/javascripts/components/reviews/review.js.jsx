var Review = React.createClass({
  upVote: function(){
    //send request to server to add a positive vote to this review
    //remove user's ability to add additional votes to this review
  },
  downVote: function(){
    //send request to server to a negative vote to this review
    //remove user's ability to add additional votes to this review
  },
  render: function(){
    debugger;
    var reviewContent = this.props.data.content
    var reviewCreatedAt = this.props.data.created_at
    var filmName = this.props.data.film.name
    var user = this.props.data.user.email
    var comments = ["There are no comments for this review!"]
    return(
      <li className='review'>
        <div className="media well well-lg">
          <div className='media-left'>
            <a href="#"><img id='review-image' className='media-object' src="http://images.redbox.com/Images/EPC/Kiosk/8003.jpg" alt="movie review image"/></a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{filmName}</h4>
            <p>{reviewContent}</p>
            <p>Posted on: {reviewCreatedAt} by {user}</p>
            <p>Is this review userful? Tell the reviewer how you feel: <a href='#' onClick={this.upVote}>Vote up</a> | <a href='#' onClick={this.downVote}>Vote Down</a></p>
          </div>
        </div>
        <div className='comment-area'>
          <h5>Comments:</h5>
          <p>{comments[0]}</p>
          <textarea class="form-control" rows="3" placeholder="Leave a comment"></textarea>
        </div>
      </li>
    )
  }
})
