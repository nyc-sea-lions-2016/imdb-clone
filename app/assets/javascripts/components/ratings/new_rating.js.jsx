var NewRating = React.createClass({
  getInitialState: function(){
    return {film: this.props.film}
  },
  handleChecked: function(e){
    this.setState({newRating: e.target.checked})
    onChange()
  },
  handleSubmit: function(e){
    e.preventDefault();
  },
  render: function(){
    return (
    <form className='new_rating_form' onSubmit={this.handleChecked} onClick={this.handleChecked}>
      <span>    1 Star</span>
      <input type='radio'  />
      <span>    2 Stars</span>
      <input type='radio'/>
      <span>    3 Stars</span>
      <input type='radio' />
      <span>    4 Stars</span>
      <input type='radio' />
      <span>    5 Stars</span>
      <input type='radio' />
      <input type='hidden' value={this.props.film.id} />
      <div>
        <input type='submit' value='Rate'/>
      </div>
    </form>
    )
  }

})
