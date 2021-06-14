import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header.component';
import FirstLevel from './components/FirstLevel-Register.component';
import SecondLevel from './components/SecondLevel.component';
import ThirdLevel from './components/ThirdLevel.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact component={FirstLevel} path="/first" />
        <Route exact component={SecondLevel} path="/second" />
        <Route exact component={ThirdLevel} path="/third" />
      </Switch>
    </div>
  );
}

export default App;
