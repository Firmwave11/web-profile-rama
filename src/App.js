import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Loader from 'src/components/Loader'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import GlobalStyles from './components/GlobalStyles';

const About = lazy(() => import('./views/about'));
const Contact = lazy(() => import('./views/contact'));
const Home = lazy(() => import('./views/home'));
const NotFound = lazy(() => import('./views/404'));
const Project = lazy(() => import('./views/project'));
const Experience = lazy(() => import('./views/experience'));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact name="Home" component={Home} />
            <Route path="/about" name="About" component={About} />
            <Route path="/experience" name="Experience" component={Experience} />
            <Route path="/project" name="Project" component={Project} />
            <Route path="/contact" name="Contact" component={Contact} />
            <Route component={NotFound} status={404} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
