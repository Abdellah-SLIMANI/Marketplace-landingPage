import React from 'react';
import images from '../../assets/images'
import "./Drawing.scss"

function Drawing() {
    return (
        <div className="drawingContainer">
            <div className="imagesContainer">
                <img src={images.ovalShape.default} alt="" />
                <img src={images.circle.default} alt="" className='firstCircle'/>
                <img src={images.circle.default} alt=""  className='secondCircle'/>
                <img src={images.circle.default} alt="" className='thirdCircle'/>
                <img src={images.ovalShape.default} alt="" />
                <img src={images.ovalImage.default} alt="" />
            </div>
            <div className = "ticket">
                <h1>Lorem</h1>
                <hr />
                <h4>Lorem, ipsum.</h4>
            </div>
        </div>
    );
}

export default Drawing;