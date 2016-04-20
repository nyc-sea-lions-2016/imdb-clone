var ReviewForm = React.createClass({
  getInitialState: function(){
    return { film: this.props.film, content: ''}
  },
  handleContentChange: function(e){
    this.setState({ content: e.target.value })
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.setState({ content:'' })
  },
  render: function(){
    var filmId = this.state.film.id
    return (
      <form className="reviewForm" onSubmit={this.handleSubmit}>
        <textarea placeholder='Leave a review ...' name='content' value={this.state.content} onChange={this.handleContentChange} />
        <input type='hidden' name='film_id' value={filmId} />
        <input type='submit' value='Post' />
      </form>
    );
  }

})
