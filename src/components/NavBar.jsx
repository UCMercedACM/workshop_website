import React, { Component } from 'react';

//IMPORT SEMANTIC UI
import {Menu, Icon} from "semantic-ui-react";

class NavBar extends Component {
    state = {  }
    render() { 
        return (
        <React.Fragment>
            <Menu inverted> 
                <Menu.Menu position = "right"> 
                    <a href = "#subHeader">
                        <Menu.Item className = "menuItem">
                            <Icon name='home'  size = "large"/>Home
                        </Menu.Item>
                    </a>

                    <a href = "#aboutMe">
                        <Menu.Item className = "menuItem">
                            <Icon name='user circle'  size = "large"/>About Me
                        </Menu.Item>
                    </a>
                    <a href = "#workExperience">
                        <Menu.Item className = "menuItem">
                            <Icon name='keyboard outline'  size = "large"/>Work Experience
                        </Menu.Item>
                    </a>
                    <a href = "#skills">
                        <Menu.Item className = "menuItem">
                            <Icon name='code'  size = "large"/>Skills
                        </Menu.Item>
                    </a>
                </Menu.Menu>
            </Menu>
        </React.Fragment>
          );
    }
}
 
export default NavBar;