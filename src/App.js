
import React, { Component } from 'react';
import { useState } from 'react';
import './App.scss';

import UserHeader from './components/UserHeader';
import ActivityCard from './components/activityCard';

import data from './data.json'


const App = () => {

  const [timeFrames, setTimeFrames] = useState("weekly")
  

  const handleDaily = () => {
    setTimeFrames(timeFrames => "daily")
  }

  const handleWeekly = () => {
    setTimeFrames(timeFrames => "weekly")
  }

  const handleMonthly = () => {
    setTimeFrames(timeFrames => "monthly")
  }

  return (
    <div className='App'>
      <UserHeader
      handleDaily = {handleDaily}
      handleMonthly = {handleMonthly}
      handleWeekly = {handleWeekly}
      />
      {data.map((expenses, index)=> {
        return (
      <ActivityCard
      timeFrames={timeFrames}
      data={data}
      index={index}
      />)}
        )}
  
    </div>
  )
}
export default App;


