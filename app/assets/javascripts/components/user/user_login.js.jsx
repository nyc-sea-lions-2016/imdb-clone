var UserLogin = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var $userContent = this.refs.userContent
    var content = {
      user: {
        content: $userContent.value
      }
    };
    $.post('/login', content, function(response){
      this.props.onUpdate();
      $userContent.value = '';
    }.bind(this));
  },
  render: function() {
    return (
      <form action='/login' class='user-login' onSubmit={this.handleSubmit}>
        <input type='text' ref='userContent' id='user-register-email' name='email' defaultValue='email' />
        <input type='text' ref='userContent' id='user-register-email' name='password' defaultValue='password' />
        <input type='submit' value='Login' />
      </form>
    );
  }
});
