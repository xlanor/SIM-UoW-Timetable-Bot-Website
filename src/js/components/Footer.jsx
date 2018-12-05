import React from 'react';

export default class AppFooter extends React.Component {
    render() {
      return (
        <div id="footer-div" style={{ textAlign: 'center' }}>
            <div id="logo-div">
                <a id="github-link" className="footer-icons" href="https://github.com/xlanor/SIM-UoW-Timetable-bot">
                    <img className="footer_logo" src="../src/images/github-logo.png" alt="github" />
                </a>
                <a id="email-link" className="footer-icons" href="mailto:contact@jingk.ai">
                    <img className="footer_logo" src="../src/images/email-icon.png" alt="contact" />
                </a>
            </div>
            <hr className="footer-divider" />
            <div id="footer-text-div">
                © 2017-{new Date().getFullYear()} Jing Kai Tan (xlanor).
            </div>
            <br/>
            <div id ="footer-text-div-bottom">
                <a href="https://github.com/alvarotrigo/react-fullpage" alt="fullpage">FullPageJS</a>
                &nbsp;•&nbsp;
                <a href="https://reactjs.org/" alt="react">ReactJS</a>
                &nbsp;•&nbsp;
                <a href="https://babeljs.io" alt="babel">BabelJS</a>
                &nbsp;•&nbsp;
                <a href="https://webpack.js.org/" alt="Webpack">Webpack</a>
                &nbsp;•&nbsp;
                <a href="https://redux.js.org/" alt="Redux">Redux</a>
                &nbsp;•&nbsp;
                <a href="https://github.com/xlanor/SIM-UoW-Timetable-Bot-Website" alt="Redux">Source Code</a>
            </div>
        </div>
      );
    }
  }
  