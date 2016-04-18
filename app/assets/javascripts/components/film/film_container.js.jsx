var FilmContainer = React.createClass({

  render: function() {
    var filmNodes = this.props.data.map(function(film){
      return (
        <Film key={film.id} name={film.name}>
        </Film>
      )
    })
    return (

    );
  }
});



render: function() {
          var commentNodes = this.props.data.map(function(comment){
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            );
          });
          return (
            <div className="commentList">
              {commentNodes}
            </div>
