import React from "react";
import '../App.css'


function Form() {
    return (
        <form>

                <div id="personal_details">
                    <div>
                        <label htmlFor="firstname">FIrst Name</label>  <br />
                        <input type='text' name='firstname' id='first_name' placeholder='Enter your first name' /> <br />
                    </div>
                    
                     <div>
                         <label htmlFor="lastname">Last Name</label> <br />
                         <input type='text' name='lastname' id='last_name' placeholder='Enter your last name' /><br />
                     </div>

                </div>
           
               
                <label htmlFor="email">Email</label> <br />
                <input type='Email' name='email' id='email' placeholder='yourname@emil.com' /><br />

                
                <input type='checkbox' name='agreement' id='agreement'/>
                <label htmlFor="agreement">You agree to providing your data to Oluwakorede Serah who may contact you</label><br />

                <label htmlFor="message">Message</label> <br />
                <textarea placeholder="Send me a message and i'reply you as soon as possible" id="message" rows='10'/>
                

                <button type='submit' id="btn__submit">Send Message</button>
            </form>
    )
}

export default Form