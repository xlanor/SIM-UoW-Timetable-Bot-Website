import React from 'react';

const getTextFromArray = (array_to_get_text,is_subtext)=>{
    let return_array = []
    for(let i=0; i < array_to_get_text.length; i++){
        let return_string = ""
        if(!is_subtext){
            return_string += "⇒ "
        }
        return_string += array_to_get_text[i]
        if(is_subtext){
            return_array.push(<span>{return_string}</span>)
            return_array.push(<br/>)
        }else{
            return_array.push(<i>{return_string}</i>)
            return_array.push(<br/>)
        }
    }
    return return_array;
}
export default class PictureElement extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div className="slide">
                <div className="wrapper-div">
                    <video className="autoplayVideo" data-autoplay autoPlay loop muted>
                        <source src={this.props.mp4} type="video/mp4"/>
                        <source src={this.props.webm} type="video/webm"/>
                        <p className="warning">Your browser does not support HTML5 video.</p>
                    </video>
                    <div className="overlay-text">
                        <div className="overlay-head">
                            <b>{this.props.title}</b>
                        </div>
                        <hr/>
                        <div className = "overlay-body">
                            {getTextFromArray(this.props.bullet_points,false)}
                        </div>
                        <div className = "overlay-subtext">
                            {getTextFromArray(this.props.sub_text,true)}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}