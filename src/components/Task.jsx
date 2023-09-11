import React, { useEffect, useState } from 'react'
import cancelIcon from '../assets/icons/cancelIcon.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import bell from '../assets/icons/bellFill.svg'
import {  format, } from 'date-fns';



const Task = ({closeModal, taskArray, setTasks, setDisplayAddTaskModal}) => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState()
    const [date, setDate] = useState(null)
    const [task, setTask] = useState()

    useEffect(()=>{
      console.log('This is start time',startTime)
    }, [startTime])

    const updateTask = ()=>{
      const newArray = [ {id: taskArray.length + 1, title: task, date: date, timeStart: startTime, timeEnd: endTime, completed: false}, ...taskArray]
      setTasks(newArray)
      setStartTime(null)
      setEndTime(null)
      setDate(null)
      setTask('')
      console.log('Time start: ', startTime)
    }


   
  return (
    <div>
      <div className='border p-4 w-[350px] md:w-[400px] h-[320px] bg-slate-100'>
        <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold'>Add Task </p>
            <img src={cancelIcon} alt="" className='cursor-pointer' onClick={()=>{closeModal(false); }} />
        </div>

        <textarea className='border w-full h-[140px] p-3 text-xs outline-none' name="" id="" placeholder='Enter your task' cols="30" rows="10" value={task} onChange={(e)=>setTask(e.target.value)}></textarea>

        <div className='flex items-center gap-2'>
            <DatePicker value={date == null ? 'Select date' : date} className='border text-slate-400 text-sm py-1 font-light px-2 rounded' selected={date} onChange={data => setDate(data)} />
            <TimePicker showSecond={false} use12Hours={true} minuteStep={10} placeholder={startTime == null ? 'Start-time' : startTime} onChange={(value)=>setStartTime(value)}/>
            <TimePicker showSecond={false} use12Hours={true} minuteStep={10} placeholder='End-time' value={endTime} onChange={(value)=>setEndTime(value)} />

        </div>
        <div className='flex justify-between items-center my-2'>
            <div className='flex items-center gap-2'>
                <img src={bell} alt="" />
                <span className='text-sm'>10 minutes before</span>
            </div>
            <img src={cancelIcon} width={12} alt="" />
        </div>

        <div className='flex items-center gap-2 mt-4'>
            <button className='border px-4 py-1 text-sm w-[150px] h-[35px] rounded' onClick={()=>{closeModal(false); }}>Cancel</button>
            <button className='border px-4 py-1 text-sm bg-blue-600 text-white w-[150px] h-[35px] rounded' onClick={()=>updateTask()}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Task
