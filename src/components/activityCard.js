import React from "react";
import IconEllipsis from "./../images/icon-ellipsis.svg"





const ActivityCard = (props) => {

    let index = props.index
  
    let timeText = {
      daily : "yesterday - ",
      weekly: "last week - ",
      monthly: "last month - "
    }

    
    return (
      <section className={`work-card${index}`}>
        <div className='blue-container'>
            <h3 aria-label="activity" className='activity-text'>{props.data[index].title}</h3>
            <h4 aria-label={`${timeText[props.timeFrames]}statistics`} className='last-week-text'>{timeText[props.timeFrames]}{props.data[index].timeframes[props.timeFrames].current}hrs</h4>
            <img className='dots-week-container' src={IconEllipsis}></img>
            <h1 aria-label="total hours" className='hours-text'>{props.data[index].timeframes[props.timeFrames].previous}hrs</h1>
          </div>
      </section>
    )
  }


  export default ActivityCard
  