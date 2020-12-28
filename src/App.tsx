import { Navigation, Dashboard, Tweet } from './components/index'
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialization } from './redux/actions';
import { ITweets, IUsers } from './services/interface';

interface DefaultRootState {
  users: IUsers, tweets: ITweets
}

function App() {
  const dispatch = useDispatch()
  const { users, tweets } = useSelector((state: DefaultRootState) => state)

  useEffect(() => {
    dispatch(handleInitialization())
  }, [])

  return (
    <Container>
      <Row>
        <header className="App-header">
          <Navigation />
        </header>
      </Row>
      <Row>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/tweets/:id" component={Tweet} />
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
