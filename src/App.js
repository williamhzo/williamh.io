import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';

import './styles/App.scss';

function App() {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </section>
  );
}

export default App;
