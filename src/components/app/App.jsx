import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragContainer from '../../containers/DragContainer';
import DetailContainer from '../../containers/DetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {DragContainer} />
        <Route exact path="/:id" component = {DetailContainer} />
      </Switch>
    </Router>
  );
}
