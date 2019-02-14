import React, { Component } from 'react';
//IMPORT SEMANTIC-UI
import {Divider, Icon, Grid} from "semantic-ui-react";

//IMPORT JAVASCRIPT
//this function is what we import from our js folder and then use it to interact with the dom to make accordion-like animation
import {accordion} from "../assets/js/accordion.js";

class workExperience extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div id = "workExperience">
                    <center className = "about"><Icon name ="keyboard outline"/>
                        <br/>
                        Work Experience
                    </center>
                    <Divider/>
                    <Grid columns = "equal">
                            <Grid.Column width = {8}>
                                <button className = "experience" onClick = {() => accordion(0)}>Sonic 06</button>
                                <div className = "panel">
                                    HORRIBLE GAME
                                </div>
                            </Grid.Column>
                       
                            <Grid.Column  width = {8}>
                                <button className = "experience" onClick = {() => accordion(1)}> Sonic Colors </button>
                                <div className = "panel">
                                    COOL GAME
                                </div>
                            </Grid.Column>
                    </Grid>
                    
                    <Grid columns = "equal">
                            <Grid.Column width = {8}>
                                <button className = "experience" onClick = {() => accordion(2)}>Sonic Mania</button>
                                <div className = "panel">
                                    GREAT GAME I SUPPOSE
                                </div>
                            </Grid.Column>
                       
                            <Grid.Column  width = {8}>
                                <button className = "experience" onClick = {() => accordion(3)}> Sonic Mania 2 </button>
                                <div className = "panel">
                                    GREAT GAME AS WELL!
                                </div>
                            </Grid.Column>
                    </Grid>
                </div>
                <br/>
                <br/>
            </React.Fragment>
          );
    }
}
 
export default workExperience;