import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Detail from '../components/articles/detail';

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
    console.log("ddddd")     
  }
  
  render() {
    return (
      <Container>
        <Search onSubmit={this.handleSubmit} />
        <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Viewed} />
           <Route  path="/emailed-articles" component={Emailed} />
           <Route  path="/shared-articles" component={Shared} />
           <Route  exact path="/viewed-articles" component={Viewed} />
           <Route  path="/viewed-articles/:id" component={Detail} />
           </Switch>  
        </BrowserRouter>  
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
