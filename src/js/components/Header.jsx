import React from 'react';
import axios from 'axios';

export default class AppHeader extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            'versionLoaded': " ",
        }
        
    }

    componentDidMount(){
        this.getVersion(this);
    }

    getVersion (state){
        let latest_github = "https://api.github.com/repos/xlanor/SIM-UoW-Timetable-bot/releases/latest";
        let version = axios.get(latest_github)
                .then(function (response) {
                    state.setState({
                        "versionLoaded":"v"+response.data.tag_name
                    });
                })
                .catch(function (error) {
                    state.setState({
                        "versionLoaded":" "
                    });
                });
        return version;
    }
    render() {
      
      return (
        <div id="header-div">
            <div id="header-text-group">
                <div id="header-title">
                    <b>Hera</b>
                </div>
                <hr id="header-split"/>
                <div className="header-sub-text">
                    Current: {this.state.versionLoaded}
                </div>
                <br/>
                <div className="header-text">
                    A bot written in python3 utilising selenium to save 
                    a copy of your timetable from SIMConnect, and 
                    display it through the third-party messaging 
                    platform Telegram.
                </div>
                <br/>
                <div className="header-text">
                    This bot is <b>not</b> an official bot sanctioned by the
                    University of Wollongong, or the Singapore Institute of Management.<br/>
                    The source code can be found on&nbsp;
                     <a id="gh_link" href="https://github.com/xlanor/SIM-UoW-Timetable-bot" alt="github-url">Github</a>
                </div>
            </div>
        </div>
      );
    }
  }
  