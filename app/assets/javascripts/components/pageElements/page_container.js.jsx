var PageContainer = React.createClass({
  getInitialState: function(){
    return {categories: [],
            selectedCategory: {name: 'All', id: 9},
            loggedIn: false,
            user: '',
    }
  },
  componentWillMount: function(){
    this.loadCategoriesFromServer();
    this.setLoggedInStatus();
  },
  setLoggedInStatus: function() {
    var self = this
    $.get('/sessions/user').done(function(response){
      self.setState({loggedIn: true, user: response.username})
    }).fail()
  },
  loadCategoriesFromServer: function(){
    $.ajax({
      url: '/categories',
      dataType: 'json',
      method: 'GET',
      success: function(categories){
        categories.unshift({name: 'All', id: 9})
        this.setState({categories: categories, selectedCategory: categories[0]});
      }.bind(this),
      error: function(xhr,status,err){
        console.error(this.props.url,status,err.toString())
      }.bind(this)
    });
  },
  shouldComponentUpdate: function(){
    return true
  },
  showCategory: function(data){
    var chosenCategory = data
    this.setState({selectedCategory: chosenCategory, showReviews: false})
    this.forceUpdate()
  },
  showReviews: function(){
    this.setState({showReviews: true})
  },
  render: function() {
    var self = this;
    var selectedCategory = this.state.selectedCategory && this.state.selectedCategory.id
    var loggedIn = this.state.loggedIn
    var user = this.state.user
    return (
      <div>
        <TopNav loggedIn={loggedIn} user={user}/>
        <LeftNav
          categories={self.state.categories}
          showCategory={self.showCategory}
          showReviews={self.showReviews}
        />
        <ContentContainer
          selectedCategory={selectedCategory}
          showReviews={self.state.showReviews}
        />
      </div>
    );
  }
});
