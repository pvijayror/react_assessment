import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/articles/search'
import { fetchArticles } from '../actions/articles'
import Articles from '../components/articles'


class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(fetchArticles())   
  }
  
  render() {
    return (
      <div className="container">
        <Search onSubmit={this.handleSubmit} />
        { JSON.stringify(this.props.articles)}
        <Articles />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("######", state.articles)
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(App);
