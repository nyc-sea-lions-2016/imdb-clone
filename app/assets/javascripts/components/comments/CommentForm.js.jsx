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
    debugger;
    var commentContent = this.state.content.trim();
    var url = '/reviews/' + 1 + '/comments'
    var content = {comment: {content: commentContent}};
    if (!commentContent){
      return;
    }
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: contact,
      success: function(response){
        this.props.onUpdate();
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
      <button className='btn btn-default' value='Submit' type='button'>Submit</button>
    </div>
    );
  },
});
