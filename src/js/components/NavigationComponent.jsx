import React from 'react';

export default class NavigationComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
            <div id="navigation-div">
                <a id="anchor_link" href={this.props.anchor_url}>{this.props.anchor_name}</a>
            </div>
            
        );
    }
}
