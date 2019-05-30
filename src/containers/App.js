import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'


class App extends Component {

  

  render() {
    return (
      <div className="container">
     <Navbar className="bg-light justify-content-between">
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-1" />
        <Button type="submit">Search</Button>
      </Form>
    </Navbar>;
  </div>
    );
  }
}

export default App;
