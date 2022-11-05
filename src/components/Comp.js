import React from "react";
import '../App.css'
import ProfileId from "./ProfileId";
import ZuriTeam from './ZuriTeam';
import ZuriBooks from './ZuriBooks';
import PythonBooks from './PythonBooks';
import BackgroundCheck from './BackgroundCheck';
import DesignBooks from './DesignBooks';
import ContactLink from "./ContactLInk";
import Socials from "./Socials";
import Footer from "./Footer";

function Comp(){ 
    return(
        
         <div className="App">
            <ProfileId />
            <ZuriTeam />
            <ZuriBooks />
            <PythonBooks />
            <BackgroundCheck />
            <DesignBooks />
            <ContactLink />
            <Socials />
            <Footer />
         </div>  
    )
}

export default Comp