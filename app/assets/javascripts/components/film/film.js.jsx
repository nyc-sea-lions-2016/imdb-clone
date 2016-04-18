var Film = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showFilm(this.props.data.id)
  },
  render: function() {
    return  (
      <section className='film'>
        <h4 className='film-name'>{this.props.name}</h4>
        <span className='film-year'>{this.props.year} </span>
        <span className='film-director'>{this.props.director}</span>
        <span className='film-oscars'>Oscar Count: {this.props.oscar_count}</span>
        <span className='film-country'>{this.props.country}</span>
      </section>
    )
  }
});
