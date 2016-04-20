var ReviewForm = React.createClass({
  getInitialState: function(){
    return { film: this.props.film, content: ''}
  },
  handleContentChange: function(e){
    this.setState({ content: e.target.value })
  },
  handleSubmit: function(e){
    e.preventDefault();
    var content = this.state.content.trim()
    var filmId = this.state.film.id
    this.setState({ content:'' })
  },
  render: function(){
    var filmId = this.state.film.id
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <textarea rows='5' cols='50' placeholder='Leave a review ...' name='content' value={this.state.content} onChange={this.handleContentChange} />
        <input type='hidden' name='film_id' value={filmId} />
        <div>
          <input type='submit' value='Post' />
        </div>
      </form>
    );
  }

})
