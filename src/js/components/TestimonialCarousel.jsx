import React from "react";
import Slider from "react-slick";
import Testimonial from './Testimonial';

const testimonial_dict = {
    "Joey" : {
        "full_name": "Joey Yee",
        "image": "../src/images/users/joey.jpg",
        "faculty": "University of Southampton",
        "text": "I’ve always disliked logging into SIMConnect to check my time table because the password is lengthy and troublesome. This telegram bot actually eases my convenience by allowing me to check my timetable with a click of a button! Now, i no longer have to waste time to check my time table!"
    },
    "Ray" : {
        "full_name": "Liew Ray Keeve",
        "image": "../src/images/users/ray.jpg",
        "faculty": "University of Buffalo",
        "text": "Hera is an ingenious creation that directly tackled the inconvenience of student's needing to log in to the portal weekly to look for their timetables. It made my school life easier all I needed to do was to look at my phone every day and Hera would send me accurately my classes for that day."
    },
    "Vanessa":{
        "full_name":"Vanessa",
        "image": "../src/images/users/vanessa.jpg",
        "faculty": "University of Birmmingham",
        "text":"Before using the telegram bot, I always had to login to SIMConnect  weekly to check my timetable and screenshot it in case I forget my schedule. These screenshots often get lost in my other photos and I have to log back into SIMConnect - again! Thank you for saving me from all the hassle!"
    },
    "Danial":{
        "full_name":"Izz Danial Azman",
        "image": "../src/images/users/dan.jpg",
        "faculty": "University of Wollongong",
        "text":"This bot has been crucial to my success in my studies. By reducing the hassle it takes to check my timetable, it has allowed me to properly plan my schedule easily. Furthermore the daily reminders are crucial to ensuring that I turn for class on time the next day."
    }
}

const getTestimonial = () =>{
    let return_array = []
    for(var name in testimonial_dict){
        return_array.push(
            <Testimonial
                key={name}
                name={testimonial_dict[name].full_name}
                faculty={testimonial_dict[name].faculty}
                text={testimonial_dict[name].text}
                image={testimonial_dict[name].image}
                
            />
        );
    }
      
    return return_array;
 }
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      rtl: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      adaptiveHeight: true,
      autoplay:true,
      arrows:false
    };
    return (
        <div className="slick-wrapper">
            <Slider {...settings}>
                {getTestimonial()}
            </Slider>
        </div>
      
    );
  }
}