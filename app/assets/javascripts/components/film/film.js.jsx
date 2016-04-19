var Film = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    debugger;
    this.showFilm(this.props.data.id)
  },
  render: function() {
    return  (
      <li className='list-group-item'>
        <a onClick={this.handleClick}>
          <section className='film list-group-item'>
            <h4 className='film-name'>{this.props.data.name}</h4><div>Average Rating:{this.props.data.rating}</div>
            <span className='film-year'>Year: {this.props.data.year}, </span>
            <span className='film-director'>Director: {this.props.data.director}, </span>
            <span className='film-oscars'>Oscar Count: {this.props.data.oscar_count}, </span>
            <span className='film-country'>Country: {this.props.data.country} </span>
          </section>
        </a>
      </li>
    )
  }
});
