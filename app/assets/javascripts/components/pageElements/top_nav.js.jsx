var TopNav = React.createClass({
  getInitialState: function() {
    return {loggedIn: false}
  },
  componentWillMount: function() {
    this.setLoggedInStatus();
  },
  setLoggedInStatus: function() {
    $.ajax({
      url: '/users'
      // TODO If logged in, the set loggedIn state to true
    })
  },
  userSignOut: function(event) {
    event.preventDefault();
    $.ajax({
      url: '/users/sign_out',
      method: 'delete'
    }).done(function(response){
      window.location.href = '/'
    });
  },
  displayTopNavLinks: function() {
    // TODO Display sign up or login when no session exists or profile/logout when session exists
  },
  render: function() {
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>IMDBC</a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
            // TODO Call displayTopNavLinks function
              <li><a href='/users/sign_up'>Register</a></li>
              <li><a href='/users/sign_in'>Login</a></li>
              <li><a href='#'>Profile</a></li>
              <li><a href='/users/sign_out' onClick={this.userSignOut}>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
