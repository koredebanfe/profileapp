import React from "react";
import github from "../img/github.png";
import slack from "../img/slack.png";

function Socials() {
    return(
        <div>
            <div className="socials">
            <div>
            <img 
            src={slack}
            alt="slack icon"
             />
            </div>
            
            <div>
            <img 
            src={github}
            alt="github icon"
             />
            </div>
            </div>
            
        </div>
    )
}

export default Socials