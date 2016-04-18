var UserLogin = React.createClass({

  render: function() {
    return (
      <form class='user-login'>
        <input type='text' name='email' defaultValue='email' />
        <input type='text' name='password' defaultValue='password' />
        <input type='submit' value='Login' />
      </form>
    );
  }
});
