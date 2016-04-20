var Film = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.showFilm(this.props.data)
  },
  render: function() {
    return  (
      <li className='list-group-item'>
        <a href='#' onClick={this.handleClick}>
          <section className='film list-group-item'>
          <div className='media-left'>
            <a href="#"><img id='review-image' className='media-object' src="http://images.redbox.com/Images/EPC/Kiosk/8003.jpg" alt="movie review image"/></a>
          </div>
          <div className="media-body">
            <h4 className='film-name'>{this.props.data.name}</h4><div>Average Rating:{this.props.data.rating}</div>
            <span className='film-year'>Year: {this.props.data.year}, </span>
            <span className='film-director'>Director: {this.props.data.director}, </span>
            <span className='film-oscars'>Oscar Count: {this.props.data.oscar_count}, </span>
            <span className='film-country'>Country: {this.props.data.country} </span>
          </div>
          </section>
        </a>
      </li>
    )
  }
});
