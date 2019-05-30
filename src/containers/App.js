import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/articles/search'
import { fetchArticles } from '../actions/articles'
import Articles from '../components/articles'


class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    const [input] = e.target.children
    dispatch(fetchArticles(input.value))   
  }
  
  render() {
    return (
      <div className="container">
        <Search onSubmit={this.handleSubmit} />
        <Articles articles = {this.props.articles} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(App);
