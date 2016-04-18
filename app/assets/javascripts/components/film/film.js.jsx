var Film = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showFilm(this.props.film.id)
  },
  render: function() {
    return  (
      <section className='film'>
        <h4 className='film-name'>{this.props.data.name}</h4>
        <span className='film-year'>Year: {this.props.data.year}, </span>
        <span className='film-director'>Director: {this.props.data.director}, </span>
        <span className='film-oscars'>Oscar Count: {this.props.data.oscar_count}, </span>
        <span className='film-country'>Country: {this.props.data.country} </span>
      </section>
    )
  }
});
