var FilmShow = React.createClass({
  getInitialState: function(){
    return {selected: null}
  },
  render: function(){
    var film = this.props.data
    return (
      <section className='film-show'>
        <h3>{film.name}</h3>
        <span className='film-year'>Year: {this.props.data.year}, </span>
        <span className='film-director'>Director: {this.props.data.director}, </span>
        <span className='film-oscars'>Oscar Count: {this.props.data.oscar_count}, </span>
        <span className='film-country'>Country: {this.props.data.country} </span>
      </section>
    )
  }
})
