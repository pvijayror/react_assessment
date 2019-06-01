import React, { Fragment } from 'react'
import { Navbar, Nav, Form, FormControl, Button , NavDropdown} from 'react-bootstrap';

const Search = (props) => {

    return (   
        <Fragment>       
          <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">              
                    <NavDropdown title="DropDown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/emailed-articles">Emailed Articles</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/shared-articles">Shared Articles</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/viewed-articles">Viewed Articles</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
            <Form inline onSubmit={props.onSubmit} >
              <FormControl type="text" placeholder="Most Viewed " className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        </Fragment>
  )
}

export default Search;