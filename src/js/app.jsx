import React from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './components/Footer';
import '../css/app.css';

class App extends React.Component {
    render() {
      return (
          <div>
            <h1>Hello, world!</h1>
            < AppFooter />
          </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
  