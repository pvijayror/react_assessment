import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import Search from '../components/articles/search'
import { fetchArticles } from '../actions/articles'
import Articles from '../components/articles'
import Footer from '../components/footer'



class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    const [input] = e.target.children
    console.log(input.value)
    dispatch(fetchArticles(input.value))   
  }
  
  render() {
    return (
      <Container>
        <Search onSubmit={this.handleSubmit} />
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
    articles: state.articles
  }
}

export default connect(mapStateToProps)(App);
