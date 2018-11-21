import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Pictures from './components/Pictures';
import License from './components/License';
import '../css/app.css';

class App extends React.Component {
    render() {
      return (
          <div>
            < AppHeader />
            < Pictures />
            < License />
            < AppFooter />
          </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
  