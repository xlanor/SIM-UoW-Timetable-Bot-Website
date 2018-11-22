import React from 'react';
import NavigationComponent from './NavigationComponent';

export default class AppHeader extends React.Component {
    render() {
      return (
            <div id="header-div">
                < NavigationComponent anchor_url="#About" anchor_name = "About"/>
                < NavigationComponent anchor_url="#Features" anchor_name = "Features"/>
                < NavigationComponent anchor_url="#License" anchor_name = "License"/>
                < NavigationComponent anchor_url="#Testimonial" anchor_name = "Testimonials"/>
                < NavigationComponent anchor_url="https://github.com/xlanor/SIM-UoW-Timetable-bot" anchor_name = "Github"/>
            </div>
            
        );
    }
}
