var CategoryShow = React.createClass({
  getInitialState: function(){
    return {selected: null}
  },
  render: function(){
    var filmNodes = this.props.data.map(function(film){
    });
    return (
      <section className='category-show'>
        <h3>{this.props.data.name}</h3>
      </section>
    )
  }
})
