import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{marginTop: "5rem", marginBottom: "5rem"}}>
      <Button variant="primary" disabled className='text-center' >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />{'   '}
        Loading...
      </Button>
  </div>
  );
}

export default Loading;