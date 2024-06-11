import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../../ApiRequests/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Dropdown } from 'react-bootstrap';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { userInfo } = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const confirmLogout = window.confirm("Are you sure you want to log out?");
  //   if (confirmLogout) {
  //     dispatch(logout());
  //     navigate('/login')
  //   }
  // };

  // const dropdownRef = useRef(null);
  // automatically authenticate user if token is found
  // useEffect(() => {
  //   if (userToken) {
  //     // dispatch(getUserDetails())
  //   }
  // }, [userToken, dispatch])
  const handleSearch = () => {
    // Implement the search functionality here
    // For example, you can redirect to a search results page
    window.location.href = `/search/${searchQuery}/0`;
  };

  return (
    <Navbar expand="lg" data-bs-theme="light" className="mb-2" sticky="top" style={{backgroundColor: "rgb(136 133 225)", borderRadius: ".9rem"}} >
      <Container fluid>
        <Navbar.Brand href="/" 
          style={{
            fontWeight: "700",
            color: "rgb(255, 255, 255)"
          }}
        > 
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />{'  '}
          AuIES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '2000px' }}
            navbarScroll
            variant="tabs"
            
          >
          <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
          <Nav.Link href="/ielts-writing-samples" className={location.pathname === '/ielts-writing-samples' ? 'active' : ''}>Samples</Nav.Link>
          <Nav.Link href="/latest-topic" className={location.pathname === '/latest-topic' ? 'active' : ''}>Latest Topic</Nav.Link>
            <NavDropdown title="Scoring System" id="navbarScrollingDropdown" className={location.pathname === '/check-essay' ? 'active' : ''}>
              <NavDropdown.Item href="/check-essay" >Check Essay</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/deep-score">
                Deep Score
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="warning" onClick={handleSearch}>Search</Button>
          </Form>
          {userInfo ? (
          <Dropdown as={ButtonGroup} style={{"paddingLeft": "1.5rem"}}>
            <Button variant="info"></Button>

            <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ) : (
          <>
          <ButtonGroup aria-label="Basic example" style={{"paddingLeft": "1.5rem"}}>
            <Button variant="outline-light" onClick={() => navigate("./register")}>Register</Button>
            <Button variant="outline-light"onClick={() => navigate("./login")}>Login</Button>
          </ButtonGroup>
          </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
