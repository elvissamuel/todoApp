import React, { useEffect, useState } from 'react'
import cancelIcon from '../assets/icons/cancelIcon.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import bell from '../assets/icons/bellFill.svg'
import {  format, parse } from 'date-fns';
import moment from 'moment';



const EditTask = ({closeModal, taskArray, tasks, editIndex, updateTask, closeEdit, setTaskClicked}) => {
    const [startTime, setStartTime] = useState( moment(editIndex.timeStart, 'HH:mm'))
    const [endTime, setEndTime] = useState(moment(editIndex.timeEnd, 'HH:mm'))
    const [date, setDate] = useState(typeof editIndex.date === 'string' ? new Date(editIndex.date):editIndex.date)
    const [task, setTask] = useState(editIndex.title)
    

    const handleEditTask = (id)=>{
        updateTask((prev)=> {
          const taskIndex = prev.findIndex((item)=> item.id === id)
          const taskIndex2 = prev.indexOf(editIndex)
          const newArray = [...prev]
          newArray[taskIndex2] = {id: editIndex.id, title:task, date: date, timeStart: startTime, timeEnd: endTime, completed: false}
          console.log('1: ', taskIndex, '2: ', taskIndex2)
          return newArray
        }) 
    }

    // useEffect(()=>{
    //     console.log(startTime)
    // }, [startTime])

  return (
    <div>
      <div className='border p-4 w-[350px] md:w-[400px] h-[320px] bg-slate-100'>
        <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold'>Edit Task </p>
            <img src={cancelIcon} alt="" className='cursor-pointer' onClick={()=>{closeEdit(false);}} />
        </div>

        <textarea className='border w-full h-[140px] p-3 text-xs outline-none' name="" id="" placeholder='Enter your task' cols="30" rows="10" value={task} onChange={(e)=>setTask(e.target.value)}></textarea>

        <div className='flex items-center gap-2'>
            <DatePicker value={format(date, 'dd-MM-yyyy')} className='border text-slate-400 text-sm py-1 font-light px-2 rounded' selected={date} onChange={data => setDate(data)} />
            <TimePicker showSecond={false} use12Hours={true} minuteStep={10} placeholder={startTime.format('HH:mm')}  onChange={(value)=>setStartTime(value)}/>
            <TimePicker showSecond={false} use12Hours={true} minuteStep={10} placeholder={endTime.format('HH:mm')}  onChange={(value)=>setEndTime(value)} />

        </div>
        <div className='flex justify-between items-center my-2'>
            <div className='flex items-center gap-2'>
                <img src={bell} alt="" />
                <span className='text-sm'>10 minutes before</span>
            </div>
            <img src={cancelIcon} width={12} alt="" />
        </div>

        <div className='flex items-center gap-2 mt-4'>
            <button className='border px-4 py-1 text-sm w-[150px] h-[35px] rounded' onClick={()=>{closeEdit(false);}} >Cancel</button>
            <button className='border px-4 py-1 text-sm bg-blue-600 text-white w-[150px] h-[35px] rounded' onClick={()=>handleEditTask(taskArray.indexOf(editIndex))}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditTask
