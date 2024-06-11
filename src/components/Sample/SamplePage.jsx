import { useDispatch, useSelector } from 'react-redux';
import './style.css'; // Import your CSS file here
import { Container} from 'react-bootstrap';
import { listEssaysSample } from '../../ApiRequests/actions/essayActions';
import { useEffect } from 'react';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';
import Advertisement from '../Elements/PageSample/Advertisement';
import Navigation from '../Elements/PageSample/Navigation';
import ListEssay from './ListEssay';
import { Helmet } from 'react-helmet-async';

function SamplePage() {
  const dispatch = useDispatch();

  // Fetch essays on component mount
  useEffect(() => {
    dispatch(listEssaysSample());
  }, [dispatch]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essaySampleGet);
  const { loading, error, essays } = essayList;

 
  return (
    <>
    <Helmet>
        <title>Ielts Writing Task 2 Samples</title>
        <meta name='description' content='Ielts writing samples with various band score'/>
        <link rel='canonical' href='/ielts-writing-samples'></link>
    </Helmet>
    <Container className='nopadding'>
    <div className="jsx-2609154510 inner">
    </div>
    <div className="jsx-2609154510 left align-center">
        <div className="jsx-2609154510 backlinks">
          <div className="jsx-1447009358 root">
            <div className="jsx-1447009358">
              <a className="jsx-721911361 link link_theme_gray" href="/">IELTS Writing Evaluation Service</a> / 
            </div>
            <div className="jsx-1447009358">IELTS Writing Samples Task 2</div>
          </div>
        </div>
        <div className="jsx-2609154510 title">
          <h1 className="jsx-1760859754 h2">IELTS Writing Samples Task 2</h1>
        </div>

        <div className="jsx-2609154510 description">
          <span className="jsx-242105113 t18">
            <p>The IELTS essays below will give you a better idea of how to turn your essay into a well-structured, complete-length essay.</p>
          </span>
        </div>
        <Navigation/>
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
    </>
  );
}

export default SamplePage;
