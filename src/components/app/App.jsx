import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QueenListContainer from '../../containers/QueenListContainer';
import DetailContainer from '../../containers/DetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {QueenListContainer} />
        <Route exact path="/:id" component = {DetailContainer} />
      </Switch>
    </Router>
  );
}
