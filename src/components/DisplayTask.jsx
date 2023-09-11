import React, { useEffect, useState } from 'react'
import clockIcon from '../assets/icons/clock.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import cancelIcon from '../assets/icons/cancelIcon.svg'
import {  format, parse } from 'date-fns';
import DeleteModal from './DeleteModal';



const DisplayTask = ({taskArray, tasks, setTasks, id, setTaskClicked, showEdit, setDisplayTaskModal, setOpenDeleteModal}) => {
  const [myTasks, setMyTasks] = useState()

  const handleComplete = (id)=>{
    const newArray = [...taskArray]
    newArray[id].completed = !newArray[id].completed
    setTasks(newArray)
  }

 

    console.log('this is task: ', tasks)
  return (
    <div className='w-[350px] md:w-[395px] h-[260px] shadow-lg bg-slate-50 relative pt-12 pl-8'>
        {/* {openDeleteModal && <DeleteModal handleDelete={handleDeleteTask} closeModal={setOpenDeleteModal} id={id} />} */}
      <img src={cancelIcon} className='absolute right-5 top-5 cursor-pointer ' alt="" onClick={()=>{setTaskClicked(false);}}/>
      <h2 className='font-semibold text-xl'>{ id?.title}</h2>

      <div className='my-6 flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
            <img src={calendarIcon} alt="" />
            <p>{format(new Date(id?.date), 'dd-MM-yyy') === format(new Date(), 'dd-MM-yyyy') ? 'Today' : format(new Date(id?.date), 'dd-MM-yyyy')}</p>
        </div>
        <div className='flex items-center gap-3'>
            <img src={clockIcon} alt="" />
            <p>{typeof id?.timeStart === 'string' ? format(parse(id?.timeStart, 'HH:mm', new Date()), 'HH:mm') : id?.timeStart?.format('HH:mm')} - {typeof id?.timeEnd === 'string' ? format(parse(id?.timeEnd, 'HH:mm', new Date()), 'HH:mm') : id?.timeEnd.format('HH:mm')}</p>
        </div>
      </div>

      <div className='flex items-center gap-1 mt-4'>
            <button className='bg-red-700 border px-4 py-1 text-white text-sm w-[100px] h-[35px] rounded' onClick={()=>{setOpenDeleteModal(true); setTaskClicked(false);}}>Delete</button>
            <button className='border px-4 py-1 text-sm bg-blue-600 text-white w-[100px] h-[35px] rounded' onClick={()=>{showEdit(true); setTaskClicked(false);}}>Edit</button>
            <button className={`border px-4 py-1 text-sm text-white w-[100px] h-[35px] rounded ${id.completed ? 'bg-orange-600' : 'bg-green-700'}`} onClick={()=>handleComplete(taskArray.indexOf(id))} >{id.completed ? 'Unmark' : 'Completed'}</button>
        </div>
    </div>
  )
}

export default DisplayTask
