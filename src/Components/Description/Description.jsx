import React from 'react';
import images from '../../assets/images';
import Drawing from '../Drawing/Drawing';
import "./Description.scss"

function Description(props) {
    return (
        <div className = "mainContainer">
            <div className = "drawingContainer">
                <img src={images.drawing.default} alt="" />
            </div>
            <div className="descriptionContainer">
            <div className="h1sDiv">
                <h1 className="horizontalText">Lorem, ipsum dolor.</h1>
                <h1 className="mainTitle">MarketPlace</h1>
            </div>
            <div className="semiContainer">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga adipisci ipsa maxime veniam. Illum cum doloribus,
                     modi mollitia dignissimos maxime.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga adipisci ipsa maxime veniam. Illum cum doloribus,
                     modi mollitia dignissimos maxime. 
                </p>
                <div className="formContainer">
                    <button>Start Selling Now</button>
                    <input type="text" placeholder = "Enter Your Email..."/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Description;