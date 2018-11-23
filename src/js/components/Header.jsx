import React from 'react';
import NavigationComponent from './NavigationComponent';
import { connect } from 'react-redux';


@connect((store) => {
    return {
        name: store.header_underline.name,
    };
})

export default class AppHeader extends React.Component {
    render() {
        console.log("Received redux update")
        console.log(this.props);
      return (
            <div id="header-div">
                < NavigationComponent anchor_url="#About" anchor_name = "About" anchor_tag="header1" toggle={(this.props.name == "About")?false:true} />
                < NavigationComponent anchor_url="#Features" anchor_name = "Features" anchor_tag="header2" toggle={(this.props.name == "Features")?false:true} />
                < NavigationComponent anchor_url="#License" anchor_name = "License" anchor_tag="header3" toggle={(this.props.name == "License")?false:true}/>
                < NavigationComponent anchor_url="#Testimonial" anchor_name = "Testimonials" anchor_tag="header4" toggle={(this.props.name == "Testimonials")?false:true}/>
                < NavigationComponent anchor_url="https://github.com/xlanor/SIM-UoW-Timetable-bot" anchor_name = "Github" anchor_tag="header5" toggle={(this.props.name == "Github")?false:true}/>
            </div>
            
        );
    }
}
