import React from 'react'
import Slider from 'react-image-slider';


export const SliderNew = ()=>{

    const images = [
        { url: "/1.jpg" },
        { url: "/2.jpg" },
        { url: "/3.jpg" },
        { url: "/4.jpg" }
    ];

    return (
        <div>
            <Slider images={images} isInfinite delay={5000}>
                {images.map((image, key) => <div key={key}><img src={image.url} /></div>)}
            </Slider>
        </div>
    );


}