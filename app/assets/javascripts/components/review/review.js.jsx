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
    var reviewContent = this.props.data.content
    var reviewCreatedAt = this.props.data.created_at
    return(
      <li className='review'>
        <div className="media well well-lg">
          <div className='media-left'>
            <a href="#"><img id='review-image' className='media-object' src="http://images.redbox.com/Images/EPC/Kiosk/8003.jpg" alt="movie review image"/></a>
          </div>
          <div className="media-body">
            <h5 className="media-heading">Movie Name</h5>
            <p>{reviewContent}</p>
            <p>Posted on: {reviewCreatedAt} by USERNAME</p>
            <p>Is this review userful? Tell the reviewer how you feel: <a href='#' onClick={this.upVote}>Vote up</a> | <a href='#' onClick={this.downVote}>Vote Down</a></p>
          </div>
        </div>
      </li>
    )
  }
})
