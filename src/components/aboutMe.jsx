import React, { Component } from 'react';
//IMPORT SEMANTIC-UI
import {Divider, Icon} from "semantic-ui-react";

class aboutMe extends Component {
    render() { 
        return ( 
                <React.Fragment>
                    <div id = "aboutMe">
                        <center className = "about"><Icon name ="user circle"/>
                            <br/>
                            About Me
                        </center>
                        <Divider/>
                        <p className = "textWrite">
                        A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, in the eulipotyphlan family 
                        Erinaceidae. There are seventeen species of hedgehog in five genera, found through parts of Europe,
                         Asia, and Africa, and in New Zealand by introduction. There are no hedgehogs native to Australia, 
                         and no living species native to the Americas (the extinct genus Amphechinus was once present in 
                         North America). Hedgehogs share distant ancestry with shrews (family Soricidae), with gymnures 
                         possibly being the intermediate link, and have changed little over the last 15 million years.[2]
                          Like many of the first mammals, they have adapted to a nocturnal way of life.[3] Hedgehogs' spiny protection 
                        resembles that of the unrelated porcupines, which are rodents, and echidnas, a type of monotreme.
                        </p>
                    </div>
                    <br/>
                    <br/>
               </React.Fragment>
         );
    }
}
export default aboutMe;