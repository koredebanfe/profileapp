import React from "react";
import '../App.css'
import zuri from "../img/zuri.png";
import I4G from "../img/I4G.png";

function Footer() {
    return (
        <footer>
        <div>
        <img 
        src={zuri}
        alt="zuri icon"
         />
        </div>

        <div id="hng__logo">
            <p>
                HNG Internship 9 frontend Task
            </p>
        </div>

        <div>
            <img 
        src={I4G}
        alt="14g icon"
         />
        </div>
        </footer>
    )
}

export default Footer