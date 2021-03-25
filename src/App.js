import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import GlobalStyles from './components/GlobalStyles';
import Profile from './layouts/index';
import Home from './views/home/index';
import About from './views/about/index';
import Experience from './views/experience/index';
import Project from './views/project/index';
import Contact from './views/contact/index';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Switch>
          <Route path="/" exact name="Home" component={Home} />
          <Route path="/about" name="About" component={About} />
          <Route path="/experience" name="Experience" component={Experience} />
          <Route path="/project" name="Project" component={Project} />
          <Route path="/contact" name="Contact" component={Contact} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
