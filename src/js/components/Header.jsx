import React from 'react';
import NavigationComponent from './NavigationComponent';

export default class AppHeader extends React.Component {
    render() {
      return (
            <div id="header-div">
                < NavigationComponent anchor_url="#About" anchor_name = "About" anchor_tag="header1"/>
                < NavigationComponent anchor_url="#Features" anchor_name = "Features" anchor_tag="header2"/>
                < NavigationComponent anchor_url="#License" anchor_name = "License" anchor_tag="header3" />
                < NavigationComponent anchor_url="#Testimonial" anchor_name = "Testimonials" anchor_tag="header4" />
                < NavigationComponent anchor_url="https://github.com/xlanor/SIM-UoW-Timetable-bot" anchor_name = "Github" anchor_tag="header5"/>
            </div>
            
        );
    }
}
