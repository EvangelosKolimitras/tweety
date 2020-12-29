import { Navigation, Dashboard, Tweet } from './components/index'
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleInitialization } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(handleInitialization())
    }, []
  )

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
