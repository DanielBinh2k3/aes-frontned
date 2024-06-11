import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const PaymentPage = () => {
  const [totalCost, setTotalCost] = useState(99.99);
  const [name, setName] = useState('')
  const [service, setService] = useState('Premium Subscription');
  const bankName = "TPBank";
  const accountNumber = "00002268834";
  const amount = "10000";
  const fullName = "Truong Nguyen Gia Binh";
  const encodedFullName = encodeURIComponent(fullName);
  const imageUrl = `https://api.vieqr.com/vietqr/${bankName}/${accountNumber}/${amount}/full.jpg?NDck=${service}&FullName=${encodedFullName}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your payment processing logic
    console.log('Payment submitted:', { totalCost, name, service });
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Row>
        <Col md={6} className='align-items-center'>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={imageUrl}
                  alt="QR Code"
                  className="img-fluid img-thumbnail"
                  style={{"max-height" : "20rem"}}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="mb-4">Payment Information</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="totalCost">
                  <Form.Label>Total Cost</Form.Label>
                  <Form.Control
                    type="number"
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="service">
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;