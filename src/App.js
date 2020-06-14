import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cursor from './Components/Cursor';

import Main from './Main';

function App() {
  return (
    <section className="app">
      <Cursor />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </section>
  );
}

export default App;
