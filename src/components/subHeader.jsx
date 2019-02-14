import React, { Component } from 'react';

//IMPORT IMAGES
import img from "../assets/img/backimg.png";

class SubHeader extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className = "subheader" id = "subHeader">
                    <img alt ="" className = "subheaderIMG" src = {img}/>
                    <div className = "textOver">Hedgehogs are awesome!!</div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default SubHeader;