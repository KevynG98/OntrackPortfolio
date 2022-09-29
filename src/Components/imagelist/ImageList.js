import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ImageList.css"
import { lista} from "../../Firebase"
//npm i react-responsive-carousel
//https://www.npmjs.com/package/react-responsive-carousel

class ImageList extends Component {
    render() {
        return (
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} width={"90%"} dynamicHeight={true}> 
                {lista()}
            </Carousel>
        );
    }
};

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default ImageList