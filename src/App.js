
import './App.css';
import Study from './components/Study';
import FrontPage from './components/FrontPage';
import { Route, Switch } from 'react-router-dom';
import Work from './components/Work';
import News from './components/News'
import Random from './components/Random'
import Social from './components/Social';
import Blog from './components/Blog'
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route  exact path='/No' component={FrontPage} />
        <Route exact path='/No/ram' component={Study} />
        <Route exact path='/No/mira' component={Work} />
        <Route exact path='/No/saurabh' component={News} />
        <Route exact path='/No/mira/shyam' component={Random} />
        <Route exact path='/No/kanha' component={Social} />
        <Route exact path='/No/shiv' component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
