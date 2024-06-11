import { useDispatch, useSelector } from 'react-redux';
import './style.css'; // Import your CSS file here
import { Container} from 'react-bootstrap';
import { listEssaysByBand } from '../../ApiRequests/actions/essayActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Advertisement from '../Elements/PageSample/Advertisement';
import ListEssay from './ListEssay';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';

function BandPage() {
  const dispatch = useDispatch();
  const { bandId, pageNumber } = useParams();

  // Fetch essays on component mount and when bandId or pageNumber changes
  useEffect(() => {
    if (bandId && pageNumber) {
      dispatch(listEssaysByBand(bandId, pageNumber));
    }
  }, [dispatch, bandId, pageNumber]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essayBandGet);
  const { loading, error, essays } = essayList;
  console.log(error)

  return (
    <Container>
        <div className="jsx-2609154510 inner">
        </div>
        <div className="jsx-2609154510 left">
            <div className="jsx-2609154510 backlinks">
            <div className="jsx-1447009358 root">
                <div className="jsx-1447009358">
                    <a className="jsx-721911361 link link_theme_gray" href="/">
                    IELTS Writing Correction Service
                    </a> /
                </div><div className="jsx-1447009358">
                    <a className="jsx-721911361 link link_theme_gray" href="/ielts-writing-samples">
                    Writing Samples
                    </a> / 
                </div>
            <div className="jsx-1447009358">IELTS Writing Samples Band {bandId}</div>
        </div>
        </div>
            <div className="jsx-2609154510 title">
            <h1 className="jsx-1760859754 h2">IELTS Writing Samples {bandId}</h1>
            </div>

            <div className="jsx-2609154510 description">
            <span className="jsx-242105113 t18">
                <p>The IELTS essays below will give you a better idea of how to turn your essay into a well-structured, complete-length essay.</p>
            </span>
            </div>
        <div className="jsx-2609154510 list">
          {loading ? (
            <Loading/>
          ) : error ? (
          <Error err_msg={error}/>
          ) :<ListEssay essays={essays}/>}
        </div>
        </div>
          <Advertisement/>
    </Container>
  )
}

export default BandPage
