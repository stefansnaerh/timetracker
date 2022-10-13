
import React from "react";
import ProfilePic from "./../images/image-jeremy.png"



const UserHeader = (props) => {
    return (
      <div className='user-card'>
        <div className='profile-container'>
          <img aria-label="profile picture" src={ProfilePic} className='person-image'></img>
          <div className='name-container'>
            <h4 className='name-sub'>Report for</h4>
            <h2 className='name'>Jeremy Robson</h2>
          </div>
        </div>
        <div className='button-container'>
          <button aria-label="see daily stats" onClick={() => props.handleDaily()}>Daily</button>
          <button aria-label="see weekly stats" onClick={() => props.handleWeekly()}>Weekly</button>
          <button aria-label="see monthly stats" onClick={() => props.handleMonthly()} >Monthly</button>
        </div>
      </div>
    )
  }


  export default UserHeader