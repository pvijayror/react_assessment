import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/articles/search'



class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    
  }
  

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
