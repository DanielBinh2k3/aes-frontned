import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Success({ success_msg }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Success! {success_msg}</Alert.Heading>
        <p>
          The operation was completed successfully.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Success</Button>;
}

export default Success;