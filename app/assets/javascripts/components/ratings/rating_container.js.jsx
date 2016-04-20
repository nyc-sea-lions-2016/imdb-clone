var RatingContainer = React.createClass({
  getInitialState: function(){
    return {film: this.props.film}
  },
  handleRatingSubmit: function(newRating){
    $.ajax({
      url:'/ratings',
      method: 'Post',
      data: newRating,
      dataType: 'json',
      success: function(response){
        console.log(response)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    })
  },
  render: function(){
    return (
      <section className='rating-container' onRatingSubmit={this.handleRatingSubmit}>
        <NewRating film={this.props.film}/>
      </section>
    )
  }
})
