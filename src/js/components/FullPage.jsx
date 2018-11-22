/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import AppMainPage from './AppMainPage';
import License from './License';
import Pictures from './Pictures';
import PictureElement from './PictureElement';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
const videoDetails = [
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
const getVideo = () =>{
   let return_array = []
   for(let i=0; i < videoDetails.length; i++){
    {console.log(videoDetails[i].title)}
      return_array.push(<PictureElement
          key = {i}
          title={videoDetails[i].title} 
          mp4={videoDetails[i].mp4}
          webm={videoDetails[i].webm}
          bullet_points={videoDetails[i].bullet_points}
          sub_text={videoDetails[i].sub_text}
        />);
   }
   return return_array;
}
const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state }) => {
      let video_details = getVideo();
      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section section1">
            < AppMainPage />
          </div>
          <div className="section">
            {video_details}
          </div>
          <div className="section">
            < License />
          </div>
        </div>
      );
    }}
  />
);



export default FullpageWrapper;
