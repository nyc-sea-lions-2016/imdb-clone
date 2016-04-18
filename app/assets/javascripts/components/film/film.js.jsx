var Film = React.createClass({

  render: function() {
    return  (
      <section className='film-container'>
        <h4 className='film-name'>{this.props.name}</h4>
        <span className='film-year'>{this.props.year} </span>
        <span className='film-director'>{this.props.director}</span>
        <span className='film-oscars'>Oscar Count: {this.props.oscar_count}</span>
        <span className='film-country'>{this.props.country}</span>
      </section>;
    )
  }
});
