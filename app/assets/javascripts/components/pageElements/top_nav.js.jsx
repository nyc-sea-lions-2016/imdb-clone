var TopNav = React.createClass({

  render: function() {
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>IMDBC</a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='/users/sign_up'>Register</a></li>
              <li><a href='/users/sign_in'>Login</a></li>
              <li><a href='#'>Profile</a></li>
              <li><a href='/users/sign_out'>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
