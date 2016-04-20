var ReviewForm = React.createClass({

  getInitialState: function(){
    return { film: this.props.film, content: ''}
  },
  handleContentChange: function(e){
    this.setState({ content: e.target.value })
  },
  handleSubmit: function(e){
    e.preventDefault();
    var data = {content: this.state.content.trim(), filmId: this.state.film.id }
    this.props.onReviewSubmit(data)
    this.setState({ content:'' })
  },
  render: function(){
    return (
      <form className="review-form form-group" onSubmit={this.handleSubmit}>
        <textarea id='review-input' className='form-control' rows='5' placeholder='Leave a review ...' value={this.state.content} onChange={this.handleContentChange} />
        <input type='hidden' value={this.state.film.id} />
        <div id='review-btn'>
          <button className='btn btn-default' type='button' value='Post'>Post</button>
        </div>
      </form>
    );
  }

})
