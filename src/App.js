import logo from './logo.svg';
import './App.css';

import AmountTable from './componets/AmountTable/AmountTable';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AmountTablePage from './pages/AmountTablePage';
import CreateFormTablePage from './pages/CreateFormTablePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/table' exact component={AmountTablePage} />
          <Route path='/' component={CreateFormTablePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
