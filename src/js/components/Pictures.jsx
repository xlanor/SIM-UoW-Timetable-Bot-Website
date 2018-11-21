import React from 'react';

export default class Pictures extends React.Component {
    

    render() {
      const videoDetails =[
          {
              "title":"Scrollable Timetable",
              "mp4":"../src/videos/scrollable_timetable.mp4",
              "webm":"../src/videos/scrollable_timetable.webm",
              "bullet_points":[
                "Pulls all timetables from SIMConnect",
                "Inline scrolling with Telegram"
              ],
              "sub_text":[
                  "* All timetables only includes classes and IS timetables",
                  "** Subject to Telegram rate limits",
                  "*** Does NOT automatically update"
              ]
          },
          {
            "title":"Daily Alerts",
            "mp4":"../src/videos/notification_alert.mp4",
            "webm":"../src/videos/notification_alert.webm",
            "bullet_points":[
              "Notifications at 8am and 10pm every day.",
              "Provide details of upcoming classes",
              "Never miss another class again!"
            ],
            "sub_text":[
                "* Does not guarantee a safeguard against oversleeping"
            ]
          },
          {
            "title":"Chatbot Signup",
            "mp4":"../src/videos/signup_tt_v2.mp4",
            "webm":"../src/videos/signup_tt_v2.webm",
            "bullet_points":[
              "Talk to get started",
              "Comprehensive documentation on Github"
            ],
            "sub_text":[]
          },
          {
            "title":"Reduced Complexity",
            "mp4":"../src/videos/sim_navigation.mp4",
            "webm":"../src/videos/sim_navigation.webm",
            "bullet_points":[
              "No more suffering with an interface clearly not designed for mobile"
            ],
            "sub_text":[]
          }
      ]
      return (
        <div id="pictures-div">
            <div className="wrapper-div">
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
                        ⇒ Pulls all timetables from SIMConnect 
                        <br/>
                        ⇒ Inline scrolling with Telegram
                    </div>
                    <div className = "overlay-subtext">
                        <i>* All timetables only includes classes and IS timetables</i>
                        <br/>
                        <i>** Subject to Telegram rate limits</i>
                        <br/>
                        <i>*** Does NOT automatically update.</i>
                    </div>
                </div>
            </div>
            <div className="wrapper-div">
                <video className="autoplayVideo"  autoPlay loop muted>
                    <source src="../src/videos/notification_alert.mp4" type="video/mp4"/>
                    <p className="warning">Your browser does not support HTML5 video.</p>
                </video>
                <div className="overlay-text">
                    <div className="overlay-head">
                        <br/>
                        <b>Daily Alerts</b>
                    </div>
                    <hr/>
                    <div className = "overlay-body">
                        ⇒ Notifications at 8am and 10pm every day.
                        <br/>
                        ⇒ Provide details of upcoming classes
                        <br/>
                        ⇒ Never miss another class again! *
                    </div>
                    <div className = "overlay-subtext">
                            <i>* Does not guarantee a safeguard against oversleeping</i>
                            <br/>
                    </div>
                </div>
            </div>
            <div className="wrapper-div">
                <video className="autoplayVideo"  autoPlay loop muted>
                    <source src="../src/videos/signup_tt_v2.mp4" type="video/mp4"/>
                    <p className="warning">Your browser does not support HTML5 video.</p>
                </video>
                <div className="overlay-text">
                    <div className="overlay-head">
                        <br/>
                        <b>Chatbot Signup</b>
                    </div>
                    <hr/>
                    <div className = "overlay-body">
                        ⇒ Simply talk to get started.
                        <br/>
                        ⇒ Comprehensive documentation on Github
                        <br/>
                    </div>
                </div>
            </div>
            <div className="wrapper-div">
                <video className="autoplayVideo"  autoPlay loop muted>
                    <source src="../src/videos/sim_navigation.mp4" type="video/mp4"/>
                    <p className="warning">Your browser does not support HTML5 video.</p>
                </video>
                <div className="overlay-text">
                    <div className="overlay-head">
                        <b>Reduced Complexity</b>
                    </div>
                    <hr/>
                    <div className = "overlay-body">
                        ⇒ No more suffering with an interface clearly not designed for mobile
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  