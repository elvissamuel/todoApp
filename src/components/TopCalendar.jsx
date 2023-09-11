import React, { useState } from 'react'
import { eachDayOfInterval, startOfYear, endOfYear, format, getDate, startOfMonth, endOfMonth, closestIndexTo } from 'date-fns';
// import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';
import Task from './Task';
// ReactDOM.render(<TimePicker />, container);




const TopCalendar = () => {
    const [timeValue, setTimeValue] = useState('00:00')

    const generateYearArray = ()=>{
        const startDate = startOfYear(new Date());
        const endDate = endOfYear(new Date());
        return eachDayOfInterval({ start: startDate, end: endDate });
    }

    const generateMonthArray = ()=>{
        const startMonth = startOfMonth(new Date());
        const endMonth = endOfMonth(new Date());
        return eachDayOfInterval({start: startMonth, end: endMonth});
    }

    const monthArray = generateMonthArray()
     const monthIndex = closestIndexTo(new Date(), monthArray)

     const startIndex = getDate(new Date()) - 5
     const endIndex = getDate(new Date()) + 5
     console.log('test: ', monthIndex, startIndex, endIndex)



    const currentDate = new Date();
    const options = { month: 'long' };
    const currentMonthName = currentDate.toLocaleString('en-US', options);


    const yearArray = generateYearArray()
    const today = new Date();
    const dayOfMonth = getDate(today);

  return (
    <div>

        <h1 className='font-semibold mb-2'>{currentMonthName}</h1>
        {/* <TimePicker value={timeValue} onChange={setTimeValue} /> */}
        {/* <TimePicker showSecond={false} use12Hours={true} minuteStep={10} placeholder='Select' /> */}
        <div className='grid grid-cols-10 gap-1'>
            {monthArray.slice(startIndex, endIndex).map((date, index) => (
            <div key={index} className={`border px-2 py-1 rounded-lg cursor-pointer   ${format(date, 'd') == dayOfMonth ? 'bg-yellow-200' : 'hover:bg-slate-50'}`}>
                {/* <div>{format(date, 'MMMM')}</div> */}
                <div className='text-xs'>{format(date, 'eee')}</div>
                <div className={`text-xs`}>{format(date, 'd')}</div>
            </div>
            ))}
        </div>
  </div>
  )
}

export default TopCalendar
