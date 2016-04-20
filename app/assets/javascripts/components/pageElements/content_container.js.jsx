var ContentContainer = React.createClass({
  getInitialState: function(){
    return {films: [], selectedFilm: ''}
  },
  componentWillMount: function(){
    this.showCategory();
  },
  componentWillReceiveProps: function(nextProps){
    if (nextProps.showReviews == true){
      this.showReviews();
    } else {
      this.showCategory(nextProps.selectedCategory);
    }
  },
  showReviews: function(){
    $.ajax({
      url: '/reviews',
      dataType: 'json',
      method: 'GET',
      success: function(reviews){
        this.setState({reviews: reviews});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  showCategory: function(category){
    var categoryUrl = '/categories/' + (category || 9)
    $.ajax({
      url: categoryUrl,
      dataType: 'json',
      method: 'GET',
      success: function(films){
        this.setState({films: films});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  showFilm: function(data){
    this.setState({selectedFilm: data})
  },
  // showUser: function(){
  //   <UserContainer userDetail={this.props} />
  // },
  render: function() {
    var selectedFilm = this.state.selectedFilm
    var self = this
    return (
      <div id='content-container'>
        <FilmContainer
        selectedFilm={selectedFilm}
        showFilm={this.showFilm}
        films={this.state.films}
        reviews={this.state.reviews}
        // this.showUser();
        />
      </div>
    );
  }
});
