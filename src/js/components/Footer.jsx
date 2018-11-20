import React from 'react';

export default class AppFooter extends React.Component {
    render() {
      return (
        <div id="footer-div" style={{ textAlign: 'center' }}>
            <div id="logo-div">
                <a id="github-link" class="footer-icons" href="https://github.com/xlanor/SIM-UoW-Timetable-bot">
                    <img id="github-logo" src="../src/images/github-logo.png" alt="github" width="2%"/>
                </a>
                <a id="telegram-link" class="footer-icons" href="https://t.me/Uow_sim_tt_bot">
                    <img id="telegram-icon" src="../src/images/telegram-icon-black.png" alt="telegram" width="2%"/>
                </a>
                <a id="email-link" class="footer-icons" href="mailto:contact@jingk.ai">
                    <img id="email-icon" src="../src/images/email-icon.jpg" alt="contact" width="2%"/>
                </a>
            </div>
            <hr id="footer-divider" />
            <div id="footer-text-div">
                Jing Kai Tan © 2018
            </div>
        </div>
      );
    }
  }
  