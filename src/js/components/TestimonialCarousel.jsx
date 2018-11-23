import React from "react";
import Slider from "react-slick";
import Testimonial from './Testimonial';

const testimonial_dict = {
    "Joey" : {
        "full_name": "Joey Yee",
        "image": "../src/images/users/joey.jpg",
        "faculty": "University of Southampton",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "Ray" : {
        "full_name": "Liew Ray Keeve",
        "image": "../src/images/users/ray.jpg",
        "faculty": "University of Buffalo",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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