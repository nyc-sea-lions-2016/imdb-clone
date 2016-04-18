var LeftNav = React.createClass({
  handleClick: function(){

  },
  render: function() {
    return (
      <nav>
        <ul>
          <li onClick={this.handleClick}>Movies</li>
          <li>Categories</li>
          <li>Actors</li>
        </ul>
      </nav>
    );
  }
});
