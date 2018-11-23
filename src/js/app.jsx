import React from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import FullpageWrapper from './components/FullPage';
import '../css/app.css';

const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ["About", "Features", "License","Testimonial"],
  sectionsColor: ["#282c34", "#282c34", "#282c34"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};

class App extends React.Component {
    render() {
      return (
          <div>
            < FullpageWrapper {...fullpageOptions} />
            < AppHeader />
            < AppFooter />
          </div>
      );
    }
  }

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
  