import React, { useEffect } from 'react'
// import TimePicker from 'rc-time-picker';
import {  format, parse } from 'date-fns';
import Pagination from './Pagination';
// import moment from 'moment';



const TaskContainer = ({tasks, editIndex, taskArray, setTasks, handleEditIndex, setTaskClicked, closeNewModal, setDisplayTaskModal}) => {

  const handleEditTask = (id)=>{
    console.log(id)
  }
  useEffect(()=>{
    console.log()
  }, [tasks])

  const handleChecked = (ind)=>{
    const newArray = [...taskArray]
    newArray[ind].completed = !newArray[ind].completed
    setTasks(newArray)
  }

  const handleSelected = (id)=>{
    const selected = taskArray.find((item)=>item.id === id)
    handleEditIndex(selected)
  }
   

  return (
    <div>
        <h2 className='font-semibold mt-6'>My Tasks</h2>
        {tasks.map((task, index) => (
          <div key={task.id} id={task.id} className={`hover:bg-slate-300
           flex justify-between items-center shadow px-4 py-3 text-sm my-2 ${task.completed ? 'bg-slate-100 line-through opacity-60' : 'bg-slate-100'}  cursor-pointer`} onClick={()=>{handleSelected(task.id); setTaskClicked(true); closeNewModal(false); setDisplayTaskModal(true)}} >
              <div className='flex items-center gap-2'>
                  <input type="checkbox" checked={task.completed}  name="" id="" />
                  <div>
                      <p className='font-semibold'>{task.title}</p>
                      <p className='text-xs'>{typeof task.timeStart === 'string' ? format(parse(task.timeStart, 'HH:mm', new Date()), 'HH:mm') : task.timeStart?.format('HH:mm')} - {typeof task.timeEnd === 'string' ? format(parse(task.timeEnd, 'HH:mm', new Date()), 'HH:mm') : task.timeEnd?.format('HH:mm')} </p>
                  </div>
              </div>
              <div>
                  {/* <p>{task.date}</p> */}
                  <p>{format(new Date(task.date), 'dd-MM-yyyy') === format(new Date(), 'dd-MM-yyyy') ? 'Today' : format(new Date(task.date), 'dd-MM-yyyy')}</p>
              </div>
          </div>
        ))}
        <div className='my-4'>
          
        </div>
    </div>
  )
}

export default TaskContainer
