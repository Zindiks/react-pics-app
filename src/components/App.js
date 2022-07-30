import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";




class App extends React.Component{




    state = {images: []}


    onSearchSubmit= async (term)=>{
        const response = await unsplash.get('/search/photos',{params: {query: term,per_page: 30}});

    this.setState({images: response.data.results});
        
    }


    // componentDidUpdate(){
    //     console.log(this.state.images)
    // }


    render(){
        return (
        <div className="ui centered container"  id='app' >
            <SearchBar onSubmit={this.onSearchSubmit}/>


            <ImageList  images={this.state.images}/>


        </div>

        )
    }
}



export default App


