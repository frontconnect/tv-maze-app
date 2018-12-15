import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/organisms/header/header';

const NotFound = lazy(() => import('./components/pages/Error'));
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
        <Header/>
        <main className="main">
          <Switch>
            <Redirect path="/" exact to="/shows/6771" />
            <Route path="/shows/:showId" exact component={ShowPage} />
            <Route path="/shows/:showId/episodes/:season/:number" exact component={EpisodePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
