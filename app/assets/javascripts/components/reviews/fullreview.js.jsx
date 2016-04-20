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
  render: function(){
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
          <div className='form-group'>
            <textarea className="form-control" rows="3" id='comment' placeholder="Leave a comment"></textarea>
            <button className='btn btn-default' type='button'>Submit</button>
          </div>
        </div>
      </li>
    )
  }
})
