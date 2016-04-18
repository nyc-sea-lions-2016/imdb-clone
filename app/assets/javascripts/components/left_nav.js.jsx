var LeftNav = React.createClass({
  handleClick: function(){

  },
  render: function() {
    return (

      <div id="sidebar" role="navigation">
          <div id="sidebar-nav">
            <ul className="nav nav-stacked">
                <li ><a href="#" className='left-nav-button'> Movies</a></li>
                <li ><a href="#" className='left-nav-button'> Categories</a></li>
                <li ><a href="#" className='left-nav-button'> Actors</a></li>
            </ul>
          </div>
      </div>

    );
  }
});
