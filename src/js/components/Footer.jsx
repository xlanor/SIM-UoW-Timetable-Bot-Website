import React from 'react';

export default class AppFooter extends React.Component {
    render() {
      return (
        <div id="footer-div" style={{ textAlign: 'center' }}>
            <div id="logo-div">
                <a id="github-link" className="footer-icons" href="https://github.com/xlanor/SIM-UoW-Timetable-bot">
                    <img id="github-logo" src="../src/images/github-logo.png" alt="github" width="2%"/>
                </a>
                <a id="telegram-link" className="footer-icons" href="https://t.me/Uow_sim_tt_bot">
                    <img id="telegram-icon" src="../src/images/telegram.png" alt="telegram" width="2%"/>
                </a>
                <a id="email-link" className="footer-icons" href="mailto:contact@jingk.ai">
                    <img id="email-icon" src="../src/images/email-icon.png" alt="contact" width="2%"/>
                </a>
            </div>
            <hr className="footer-divider" />
            <div id="footer-text-div">
                © 2017-{new Date().getFullYear()} Jing Kai Tan (xlanor)
            </div>
            <br/>
            <div id="footer-text-div-2">
                For keeping me sane:
            </div>
            <div id="footer-text-div-3">
                Chen Xiao Bin • Jayner Tan • Alvin Heng • Jing Ying Yeo
            </div>
            <br/>
            <div id="footer-text-div-4">
                Thanks to my testers:
            </div>
            <div id ="footer-text-div-bottom">
                Liew Ray Keeve (UB) • Joey Yee (UOB) • See Yi Ze (UOL) • Celeste Teo (UOW) • Vinny (UOW) • Vanessa (UOB)
            </div>
        </div>
      );
    }
  }
  