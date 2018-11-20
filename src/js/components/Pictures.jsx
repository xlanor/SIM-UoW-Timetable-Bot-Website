import React from 'react';

export default class Pictures extends React.Component {
    

    render() {
      const displayFunctionOne = `
                                    A scrollable timetable to display 
                                    all the timetables that are scraped from
                                    SIMConnect.
                                `
      return (
        <div id="pictures-div">
            <div className="wrapper-div one">
                <video className="autoplayVideo" autoPlay loop muted>
                    <source src="../src/videos/scrollable_timetable.mp4" type="video/mp4"/>
                    <p className="warning">Your browser does not support HTML5 video.</p>
                </video>
                <div className="overlay-text">
                    <div className="overlay-head">
                        <b>Scrollable Timetable</b>
                    </div>
                    <hr/>
                    <div className = "overlay-body">
                        ⇒ Pulls all timetables * avaliable from SIMConnect 
                        <br/>
                        ⇒ Allows you to scroll using inline buttons in Telegram **
                        <br/>
                        ⇒ No need to login/take screenshots again!
                        <br/>
                        <br/>
                        <div className = "overlay-subtext">
                            <i>* All timetables only includes classes and IS timetables</i>
                            <br/>
                            <i>** Subject to Telegram rate limits</i>
                            <br/>
                            <i>*** Does NOT automatically update.</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper-div two">
                <video className="autoplayVideo"  autoPlay loop muted>
                    <source src="../src/videos/scrollable_timetable.mp4" type="video/mp4"/>
                    <p className="warning">Your browser does not support HTML5 video.</p>
                </video>
                <div className="overlay-text">
                    Hello,world
                </div>
            </div>
        </div>
      );
    }
  }
  