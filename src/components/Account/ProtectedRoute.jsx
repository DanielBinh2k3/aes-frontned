// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Notification from '../Elements/Common/Notification';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.userInfo)
  const [showNotification, setShowNotification] = useState(true);
  const notificationMessage = "Pleaase log in to access this page."

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
    <div style={{ height: '60vh'}}  className="d-flex align-items-center justify-content-center">
      <Container fluid>
      <Notification
        show={showNotification}
        message={notificationMessage}
        onClose={() => setShowNotification(false)}
      />
        <Row className="text-center">
          <Col>
            <h1 className="display-1 fw-bold">Unauthorized</h1>
            <p className="fs-3">
              <span className="text-danger">Oops!</span> You need to log in to use this .
            </p>
            <p className="lead">
              The page you are looking for authorized account.
            </p>
          <Button href="/login" variant="primary">Log In</Button>
          </Col>
        </Row>
    </Container>
    </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute