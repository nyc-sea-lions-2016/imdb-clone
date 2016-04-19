var ReviewContainer = React.createClass({
  getInitialState: function(){
    return {reviews: [], film: this.props.film}
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({reviews: nextProps.reviews})
  },
  render: function(){
    var self = this;
    return(
      <ReviewList film={this.state.film} reviews={this.state.reviews}/>
    )
  }

})
