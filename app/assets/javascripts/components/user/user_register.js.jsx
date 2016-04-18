var UserRegister = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var $userContent = this.refs.userContent
    var content = {
      user: {
        content: $userContent.value
      }
    };
    $.post('/users', content, function(response){
      this.props.onUpdate();
      $userContent.value = '';
    }.bind(this));
  },
  render: function() {
    return (
      <form action='/users' class='user-register' onSubmit={this.handleSubmit}>
        <input type='text' ref='userContent' id='user-register-email' name='email' />
        <input type='text' ref='userContent' id='user-register-username' name='username' />
        <input type='text' ref='userContent' id='user-register-firstname' name='first_name' />
        <input type='text' ref='userContent' id='user-register-lastname' name='last_name' />
        <input type='password' ref='userContent' id='user-register-password' name='password' />
        <input type='submit' value='Register' />
      </form>
    );
  }
});
