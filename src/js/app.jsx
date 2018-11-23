import React from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import FullpageWrapper from './components/FullPage';
import '../css/app.css';
import { Provider } from 'react-redux';
import store from './store';


class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <div>
            < FullpageWrapper />
            < AppHeader />
            < AppFooter />
          </div>
        </Provider>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
  