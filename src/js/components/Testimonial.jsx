import React from 'react';

export default class Testimonial extends React.Component {
    
    constructor(props){
        super(props);
    }
    render() {
      return (
          <div className="testimonial-indiv">
                <div className="user-image-wrapper">
                    <img className="user-image" src={this.props.image}/>
                </div>
                <div className = "user-testimonial">
                    <div className="user-testimonial-name">
                        <b>{this.props.name}</b>
                    </div>
                    <br/>
                    <div className="user-testimonial-faculty">
                        <i>{this.props.faculty}</i>
                    </div>
                    <hr className="user-testimonial-divider"/>
                    <div className="user-testimonial-text">
                        {this.props.text}
                    </div>
                </div>
          </div>
      );
    }
}