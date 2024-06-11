import { useDispatch, useSelector } from 'react-redux';
import { Container} from 'react-bootstrap';
import { EssaysByTopic } from '../../ApiRequests/actions/essayActions';
import { useEffect } from 'react';
import "./style.css"
import { useParams } from 'react-router-dom';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';
import Advertisement from "../Elements/PageSample/Advertisement";
import Navigation from "../Elements/PageSample/Navigation";
import ListTopic from './ListTopic';

function TopicPage() {
  const dispatch = useDispatch();
  const { tag } = useParams();
  // Fetch essays on component mount and when tag changes
  useEffect(() => {
    if (tag) {
      dispatch(EssaysByTopic(tag));
      
    }
  }, [dispatch, tag]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essayTopicGet);
  const { loading, error, essays } = essayList;
  console.log(essayList)
 
  return (
    <Container>
    <div className="jsx-2609154510 inner">
    </div>
    <div className="jsx-2609154510 left">
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
            <Loading  />
          ) : error ? (
          <Error err_msg={error}/>
          ) : <ListTopic essays={essays}/>}
        </div>
  
    </div>
    <Advertisement/>
    </Container>

  );
}

export default TopicPage;
