/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import AppMainPage from './AppMainPage';
import License from './License';
import Pictures from './Pictures';
import SimpleSlider from './TestimonialCarousel';
import PictureElement from './PictureElement';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from 'react-redux';
import { switchHeader } from '../actions/UpdateHeaders';

const videoDetails = [
  {
      "title":"Scrollable Timetable",
      "mp4":"../src/videos/scrollable_timetable_cropped.mp4",
      "webm":"../src/videos/scrollable_timetable_cropped.webm",
      "bullet_points":[
        "Pulls all timetables from SIMConnect",
        "Inline scrolling with Telegram"
      ],
      "sub_text":[
          " All timetables only includes classes and IS timetables",
          " Subject to Telegram rate limits",
          " Does NOT automatically update"
      ]
  },
  {
    "title":"Daily Alerts",
    "mp4":"../src/videos/notification_alert_cropped.mp4",
    "webm":"../src/videos/notification_alert_cropped.webm",
    "bullet_points":[
      "Notifications at 8am and 10pm every day.",
      "Provide details of upcoming classes",
      "Never miss another class again!"
    ],
    "sub_text":[
        " Does not guarantee a safeguard against oversleeping"
    ]
  },
  {
    "title":"Chatbot Signup",
    "mp4":"../src/videos/signup_tt_v2_cropped.mp4",
    "webm":"../src/videos/signup_tt_v2_cropped.webm",
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
      "No more suffering with an interface clearly not designed for mobile",
      "Data is cached locally in mongoDB"
    ],
    "sub_text":[]
  }
]


const getVideo = () =>{
   let return_array = []
   for(let i=0; i < videoDetails.length; i++){
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



const activateUnderline = (props, index) =>{
    console.log(index)
    switch(index){
      case 0: props.dispatch(switchHeader("About"))
              break;
      case 1: props.dispatch(switchHeader("Features"))
              break;
      case  2:props.dispatch(switchHeader("License"))
              break;
      case 3:props.dispatch(switchHeader("Testimonials"))
              break;
      case 4: props.dispatch(switchHeader("Github"))
      default: break;
    }

}
const fullpageProps = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ["About", "Features", "License","Testimonial"],
  sectionsColor: ["#282c34", "#282c34", "#282c34"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};


@connect((store) => {
  return {
    name: store.header_underline.name,
  };
})

class FullpageWrapper extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ReactFullpage
          {...fullpageProps}
          onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
            activateUnderline(this.props,destination.index)
          }}
          render={({ state ,fullpageApi}) => {
            let video_details = getVideo();
            if (state.callback === "onLeave") {
              if (state.direction === "down") {
                console.log("going down..." + state.origin.index);
              }
            }
            return (
              <div id="fullpage-wrapper">
                <div data-menuanchor="About" className="section section1">
                  < AppMainPage />
                </div>
                <div data-menuanchor="Features" className="section">
                  {video_details}
                </div>
                <div  data-menuanchor="License" className="section">
                  < License />
                </div>
                <div  data-menuanchor="Testimonial"  className="section">
                  < SimpleSlider />
                </div>
              </div>
            );
          }}
        />
    );
  }
}



export default FullpageWrapper;
