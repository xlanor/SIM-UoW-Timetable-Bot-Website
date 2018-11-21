import React from 'react';

export default class License extends React.Component {
    render() {
        return(
            <div id="license-div">
                <div id="license-text">
                    <div id="license-text-header">
                        <b>Open-Sourced</b>
                    </div>
                    <hr id="license-text-divider"/>
                    <div id="license-text-body">
                        Licensed under a strong copyleft license, the&nbsp;
                        <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License v3</a>
                        &nbsp;, the source code is avaliable on Github for the sake of transparency
                    </div>
                </div>
                <div id="license-image">
                    <img id="agplv3" src="../src/images/AGPLv3.png" alt="agpl"></img>
                </div>
            </div>
        );
    }
}