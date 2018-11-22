import React from 'react';

export default class License extends React.Component {
    render() {
        return(
            <div id="license-div">
                <div id="license-text">
                    <div id="license-text-header">
                        <b>Open-Source</b>
                    </div>
                    <hr id="license-text-divider"/>
                    <div id="license-text-body">
                        Licensed under a strong copyleft license, the&nbsp;
                        <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License v3</a>
                        &nbsp;, the source code is avaliable on Github for the sake of transparency
                        <br/><br/>
                        In addition to the AGPL, an additional clause is added, whereby simply <b>HOSTING</b> an instance
                        will require the code base to be open-sourced, or running off the latest stable version of the
                        code.
                        <br/><br/>
                        This is due to the sensitive nature of the data that is being handled with the bot. Thus, transparency
                        to the users is critical
                        <br/><br/>
                        This is a project for students, by students, and will <b>NEVER</b> accept donations, or be commercialized 
                        in <b>ANY</b> form

                        
                    </div>
                </div>
                <div id="license-image">
                    <img id="agplv3" src="../src/images/AGPLv3-white.png" alt="agpl"></img>
                </div>
            </div>
        );
    }
}