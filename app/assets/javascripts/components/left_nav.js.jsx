var LeftNav = React.createClass({
  handleClick: function(){

  },
  render: function() {
    return (

      <div id="sidebar" role="navigation">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div id="sidebar-nav">
            <ul className="nav nav-stacked">
                <li><a href="#"> Movies</a></li>
                <li><a href="#"> Categories</a></li>
                <li><a href="#"> Actors</a></li>
            </ul>
          </div>
      </div>
      
    );
  }
});
