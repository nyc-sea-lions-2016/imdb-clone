var FilmShow = React.createClass({
  getInitialState: function(){
    return {reviews: []}
  },
  loadReviewsFromServer: function(){
    var url = '/films/' + this.props.film.id + '/reviews'
    $.ajax({
      url: url,
      dataType: 'json',
      method: 'GET',
      success: function(reviews){
        this.setState({reviews: reviews})
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    })
  },
  render: function(){
    var film = this.props.film
    return (
      <div className='film-show'>
        <section className='film-info'>
          <h3>{film.name}</h3>
          <span className='film-year'>Year: {film.year}, </span>
          <span className='film-director'>Director: {film.director}, </span>
          <span className='film-oscars'>Oscar Count: {film.oscar_count}, </span>
          <span className='film-country'>Country: {film.country} </span>
        </section>
        <section className='film-reviews'>
          <ReviewContainer film={film} reviews={this.state.reviews}/>
        </section>
      </div>
    );
  }
});
