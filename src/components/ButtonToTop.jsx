import { Button } from 'react-bootstrap';

const ButtonToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Button
      aria-label="Scroll to top"
      variant="dark"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '6rem',
        right: '2.5rem',
        background: 'black',
        border: 'none',
        borderRadius: '3rem',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        className="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V3.707l3.646 3.647a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L7.5 3.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </Button>
  );
};

export default ButtonToTop;
