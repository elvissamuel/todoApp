import React from 'react'
import plusIcon from '../assets/icons/Icon.svg'



const Header = ({func , setDisplayAddTaskModal}) => {

  const currentTime = new Date().getHours();

  // Define variables for different time periods
  const morningStart = 6; // 6:00 AM
  const afternoonStart = 12; // 12:00 PM
  const eveningStart = 18; // 6:00 PM

  let greeting = '';

  // Determine the greeting based on the current time
  if (currentTime >= morningStart && currentTime < afternoonStart) {
    greeting = 'Good Morning!';
  } else if (currentTime >= afternoonStart && currentTime < eveningStart) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  return (
    <div className='flex justify-between my-6'>
      <div>
        <p className='text-xl font-semibold'>{greeting}</p>
        <p className='text-sm text-slate-500'>You got some task to do</p>
      </div>

      <button className='flex items-center gap-2 text-xs px-3 font-semibold h-9 text-white rounded bg-blue-600' onClick={()=>{func(true); setDisplayAddTaskModal(true);}}> 
        <img src={plusIcon} width={10} alt="" /> <p className='hidden md:block'>Create new task</p>
      </button>
    </div>
  )
}

export default Header
