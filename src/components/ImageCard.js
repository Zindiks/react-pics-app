import React from "react";
import fromNow from "../functions/fromNow";


class ImageCard extends React.Component{
    constructor(props){
        super(props);


        this.state={
            spans: 0
        }

        this.imageRef = React.createRef();

    }

    // componentDidMount(){ 
    //     console.log(this.imageRef)
    // }


    render(){
    return (
    <div className="ui card"  ref={this.imageRef} style={{marginTop: 0}} >
        <a className="image" href="#app" >
            <img src={this.props.image} alt={this.props.alt} />
        </a>
        <div className="content">
            <div className="header" >{this.props.obj.user.name}</div>

            <div className="meta">
                <div>Created: {fromNow(this.props.obj.created_at)}</div> 
            </div>

            <div className="description">
                <p>{this.props.obj.description}</p>
            </div>

            
             
        </div>
        <div className="extra content">
            <span className="left floated like">
            <i className="like icon"></i>
            {this.props.obj.likes} Likes
            </span>
            <span className="right floated star"> 
            <a href={this.props.obj.links.download + '.jpg'} download><i className="download icon"> </i></a>
          

            
            </span>
        </div>
    </div>
    )



}}



export default ImageCard