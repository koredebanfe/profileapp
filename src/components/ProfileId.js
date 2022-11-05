import React from "react";
import '../App.css'
import shareBtn from '../img/shareBtn.png';
import shareMobile from '../img/shareMobile.png';
import mypassport from '../img/mypassport.jpg';

function ProfileId() {
    return (
        <div className="profile">
            <div className='share'>
                <img src={shareBtn}
                alt= "shareButton"
                id='share'
                />

               <img src={shareMobile}
                alt= "shareMobile"
                id='shareMobile'
                />

            </div>

            <img src={mypassport} 
                alt='mypassport'
                id='profile__img'
                />

                <h3>
                   Oluwakorede Banfe
                </h3>

            <p id='slack' hidden>
               slack Username: Serah
            </p>

            <div>
                <a href="https://twitter.com/serahkore">
                    Twitter Link
                </a>
            </div>
       </div>
    )
}

export default ProfileId