import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  )
}

export default App;
