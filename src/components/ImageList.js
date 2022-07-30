import './ImageList.css'
import React from "react";
import ImageCard from "./ImageCard";




const ImageList =(props)=>{

    const imageCard = props.images.map((image) => {
            return <ImageCard alt={image.description} key={image.id} image={image.urls.regular} obj={image} />
        });

    return <div className="image-list">{imageCard}</div>


}



export default ImageList