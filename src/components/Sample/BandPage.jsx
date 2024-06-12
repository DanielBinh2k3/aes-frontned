import { useDispatch, useSelector } from 'react-redux';
import './style.css'; // Import your CSS file here
import { Container, Pagination } from 'react-bootstrap';
import { listEssaysByBand } from '../../ApiRequests/actions/essayActions';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Advertisement from '../Elements/PageSample/Advertisement';
import ListEssay from './ListEssay';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';

function BandPage() {
  const dispatch = useDispatch();
  const { bandId, pageNumber } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch essays on component mount and when bandId changes
  useEffect(() => {
    if (bandId) {
      dispatch(listEssaysByBand(bandId, currentPage));
    }
  }, [dispatch, bandId, currentPage]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essayBandGet);
  const { loading, error, essays } = essayList;

  // Update the total pages when the essays data is available
  useEffect(() => {
    if (essays && essays.pageProps) {
      setTotalPages(Number(essays.pageProps.pageCount));
    }
  }, [essays]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/band/${bandId}/${pageNumber}`);
    dispatch(listEssaysByBand(bandId, pageNumber));
  };

  // Calculate the page range to display
  const pageRange = calculatePageRange(currentPage, totalPages);

  return (
    <Container>
      <div className="jsx-2609154510 inner">
        {/* Your existing code */}
      </div>
      <div className="jsx-2609154510 list">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error err_msg={error} />
        ) : (
          <>
            <ListEssay essays={essays} />
            {totalPages > 1 && (
              <Pagination className="justify-content-center mt-4">
                {pageRange.map((p) => (
                  <Pagination.Item
                    key={p}
                    active={p === currentPage}
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </Pagination.Item>
                ))}
                {currentPage > 1 && (
                  <Pagination.Item
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </Pagination.Item>
                )}
                {currentPage < totalPages && (
                  <Pagination.Item
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </Pagination.Item>
                )}
              </Pagination>
            )}
          </>
        )}
      </div>
      <Advertisement />
    </Container>
  );
}

export default BandPage;

// Helper function to calculate the page range to display
function calculatePageRange(currentPage, totalPages) {
  const maxVisiblePages = 10;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageRange = [];
  for (let i = startPage; i <= endPage; i++) {
    pageRange.push(i);
  }

  return pageRange;
}