import React from 'react'
import { Form, Button, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

const Search = (props) => {

    return (
        <Navbar className="bg-light justify-content-between">
          <Form inline onClick={props.onSubmit}>
            <FormControl type="text" placeholder="Search" className=" mr-sm-1" />
            <Button type="submit">Search</Button>
          </Form>
        </Navbar>
        
    )
}

export default Search;