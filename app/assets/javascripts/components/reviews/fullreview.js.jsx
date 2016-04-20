var FullReview = React.createClass({
  upVote: function(e){
    e.preventDefault();
    this.updateVotes({voteValue: 1, reviewId: this.props.data.id})
  },
  downVote: function(e){
    e.preventDefault();
    this.updateVotes({voteValue: -1, reviewId: this.props.data.id})
  },
  updateVotes: function(voteInfo){
    $.ajax({
      url: '/votes',
      dataType: 'json',
      method: 'POST',
      data: voteInfo,
      success: function(reviews){
        //remove user's ability to add additional votes to this review
      }.bind(this),
      error: function(xhr,status,err){
        // tell user that vote could not be saved for some reason
      }.bind(this)
    })
  },
  updateComments: function(comment){
    this.setState({comments: this.props.data.comments.merge(comment)})
  },
  render: function(){
    var reviewContent = this.props.data.content
    var reviewCreatedAt = this.props.data.created_at
    var filmName = this.props.data.film.name
    var user = this.props.data.user.email
    var reviewId = this.props.data.id
    var comments = this.props.data.comments
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
            <p>No one has commented on this review!</p>
          <CommentForm reviewId={reviewId} onUpdate={this.updateComments} />
        </div>
      </li>
    )
  }
})
