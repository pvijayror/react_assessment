import React, { Fragment } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

const Search = (props) => {

    return (
     
    <Fragment>
      <br/>
    
      <div className="input-group md-form form-sm form-2 pl-0">
        <form onSubmit={props.onSubmit} style= { { 'width': '96%' } }>
          <input className="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search" />
        </form>  
        <div className="input-group-append">
          <span className="input-group-text lime lighten-2" id="basic-text1">
            <i className="fa fa-search text-grey" aria-hidden="true"></i>
          </span>
        </div>
      </div>
     
    </Fragment>
        
    )
}

export default Search;