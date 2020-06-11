import { NavLink, Route, Switch } from 'react-router-dom';

import About    from './About';
import Home     from './Home';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <main>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
          <Route component={NotFound} path="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
