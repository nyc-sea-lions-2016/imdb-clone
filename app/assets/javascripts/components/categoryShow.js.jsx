var CategoryShow = React.createClass({
  getInitialState: function(){
    return {selected: null}
  },
  render: function(){
    var filmNodes = this.props.data.map(function(film){
      // add logic for showing list of films in category show page. Reuse from John's code. Add logic below for placing each of the movie names inside the category show div.
    });
    return (
      <section className='category-show'>
        <h3>{this.props.data.name}</h3>
      </section>
    )
  }
})
