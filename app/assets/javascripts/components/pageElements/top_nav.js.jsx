var TopNav = React.createClass({
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
    if (this.props.loggedIn == true) {
      return (
        <ul className='nav navbar-nav navbar-right'>>
          <li><a href='/users/1'>{this.props.user}</a></li>
          <li><a href='/users/sign_out' onClick={this.userSignOut}>Logout</a></li>
        </ul>
      )}
    else {
      return (
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='/users/sign_up' onClick={this.showLogin}>Register</a></li>
        <li><a href='/users/sign_in'>Login</a></li>
      </ul>
    )}
  },
  render: function() {
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>IMDBC</a>
          </div>
          <div className='collapse navbar-collapse'>
            {this.displayTopNavLinks()}
          </div>
        </div>
      </nav>
    );
  }
});
