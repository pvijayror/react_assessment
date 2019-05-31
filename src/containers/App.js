import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import Search from '../components/articles/search'
import { fetchArticles } from '../actions/articles'
import Articles from '../components/articles'
import Footer from '../components/footer'

import Emailed from '../components/articles/emailed'
import Shared from '../components/articles/shared'
import Viewed from '../components/articles/viewed'

import { getViewedArticles } from '../actions/articles/viewed'
import { getSharedArticles } from '../actions/articles/shared'
import { getEmailedArticles } from '../actions/articles/emailed'

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    const [input] = e.target.children
    console.log(input.value)
    dispatch(fetchArticles(input.value)) 
    dispatch(getViewedArticles()) 
    dispatch(getSharedArticles()) 
    dispatch(getEmailedArticles())     
  }
  
  render() {
    return (
      <Container>
        <Search onSubmit={this.handleSubmit} />
        <Router>
           <Route exact path="/" component={Viewed} />
           <Route  path="/emailed-articles" component={Emailed} />
           <Route  path="/shared-articles" component={Shared} />
           <Route  path="/viewed-articles" component={Viewed} />
        </Router>  
        <br />
        <Articles articles = {this.props.articles} />
        <br /> 
        <Footer />
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    emailed: state.emailed
  }
}

export default connect(mapStateToProps)(App);
