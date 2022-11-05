import React from "react";
import '../App.css';
import Form from "./Form";
import Footer from "./Footer";

function Contact(){
    return(
        <div>
            <div className="Inp__details">

                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                 <Form />    
            </div>
            
             <Footer />
        </div>
        
    )
          
}


export default Contact