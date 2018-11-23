import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        toggle: store.header_underline.toggle,
    };
})
  

export default class NavigationComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
            <div id="navigation-div">
                <a id="anchor_link" href={this.props.anchor_url}>{this.props.anchor_name}</a>
                <hr id={this.props.anchor_tag} className="header_anchors_identifiers" hidden={this.props.toggle} ></hr>
            </div>
            
        );
    }
}
