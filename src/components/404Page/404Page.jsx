import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound404ErrorPage = () => {
  return (
    <div style={{ height: '60vh'}}  className="d-flex align-items-center justify-content-center">
    <Container fluid>
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Oops!</span> Page not found.
          </p>
          <p className="lead">
            The page you are looking for does not exist.
          </p>
          <Button href="/" variant="primary">Go Home</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NotFound404ErrorPage;