import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import GlobalStyles from './components/GlobalStyles';
import Profile from './layouts/index';
import Home from './home/index';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Switch>
          <Route path="/" exact={true} name="Home" component={Home} />
          <Route path="/about" name="About" component={Profile} />
          <Route path="/project" name="Project" component={Profile} />
          <Route path="/contact" name="Contact" component={Profile} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
