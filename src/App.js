import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const NotFound = lazy(() => import('./components/pages/NotFound'));
const HomePage = lazy(() => import('./components/pages/Home'));
const ShowPage = lazy(() => import('./components/pages/Show'));
const EpisodePage = lazy(() => import('./components/pages/Episode'));


function App() {
  const [title] = useState('Home');

  useEffect(() => {
    document.title = title;
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shows/:showId" exact component={ShowPage} />
          <Route path="/shows/:showId/episode/:season/:number" exact component={EpisodePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
