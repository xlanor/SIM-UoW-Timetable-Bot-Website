import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Pictures from './components/Pictures';
import '../css/app.css';

class App extends React.Component {
    render() {
      return (
          <div>
            < AppHeader />
            < Pictures />
            < AppFooter />
          </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
  