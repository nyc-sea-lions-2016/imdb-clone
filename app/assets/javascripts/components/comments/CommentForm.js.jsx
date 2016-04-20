var CommentForm = React.createClass({
  getInitialState: function(){
    return {content: ''};
  },
  handleContentChange: function(e){
    var currentBox = e.target.name
    this.setState({ [currentBox]: e.target.value} );
  },
  handleSubmit: function(e){
    e.preventDefault();
    var commentContent = this.state[''].trim();
    var reviewId = this.props.reviewId
    var url = '/reviews/' + reviewId + '/comments'
    var content = {comment: {content: commentContent, commentable_type: 'Review', commentable_id: reviewId}};
    if (!commentContent){
      return;
    }
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: content,
      success: function(response){
        this.props.onUpdate(response);
      }.bind(this),
      error: function(xhr,status,err){
        //add error handling
      }.bind(this)
    });
  },
  render: function(){
    return (
    <div className='form-group'>
      <textarea className="form-control" rows="3" id='comment' placeholder="Leave a comment" onChange={this.handleContentChange}></textarea>
      <button onClick={this.handleSubmit} className='btn btn-default' value='Submit' type='button'>Submit</button>
    </div>
    );
  },
});
