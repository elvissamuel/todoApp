import { Fragment, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import Nav from './Nav'
import TopCalendar from './TopCalendar'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TaskContainer from './TaskContainer'
import Header from './Header'
import Task from './Task'
import EditTask from './EditTask'
import DisplayTask from './DisplayTask'
import Pagination from './Pagination'
import DeleteModal from './DeleteModal'

// const days = [
//   { date: '2021-12-27' },
//   { date: '2021-12-28' },
//   { date: '2021-12-29' },
//   { date: '2021-12-30' },
//   { date: '2021-12-31' },
//   { date: '2022-01-01', isCurrentMonth: true },
//   { date: '2022-01-02', isCurrentMonth: true },
//   { date: '2022-01-03', isCurrentMonth: true },
//   { date: '2022-01-04', isCurrentMonth: true },
//   { date: '2022-01-05', isCurrentMonth: true },
//   { date: '2022-01-06', isCurrentMonth: true },
//   { date: '2022-01-07', isCurrentMonth: true },
//   { date: '2022-01-08', isCurrentMonth: true },
//   { date: '2022-01-09', isCurrentMonth: true },
//   { date: '2022-01-10', isCurrentMonth: true },
//   { date: '2022-01-11', isCurrentMonth: true },
//   { date: '2022-01-12', isCurrentMonth: true, isToday: true },
//   { date: '2022-01-13', isCurrentMonth: true },
//   { date: '2022-01-14', isCurrentMonth: true },
//   { date: '2022-01-15', isCurrentMonth: true },
//   { date: '2022-01-16', isCurrentMonth: true },
//   { date: '2022-01-17', isCurrentMonth: true },
//   { date: '2022-01-18', isCurrentMonth: true },
//   { date: '2022-01-19', isCurrentMonth: true },
//   { date: '2022-01-20', isCurrentMonth: true },
//   { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
//   { date: '2022-01-22', isCurrentMonth: true },
//   { date: '2022-01-23', isCurrentMonth: true },
//   { date: '2022-01-24', isCurrentMonth: true },
//   { date: '2022-01-25', isCurrentMonth: true },
//   { date: '2022-01-26', isCurrentMonth: true },
//   { date: '2022-01-27', isCurrentMonth: true },
//   { date: '2022-01-28', isCurrentMonth: true },
//   { date: '2022-01-29', isCurrentMonth: true },
//   { date: '2022-01-30', isCurrentMonth: true },
//   { date: '2022-01-31', isCurrentMonth: true },
//   { date: '2022-02-01' },
//   { date: '2022-02-02' },
//   { date: '2022-02-03' },
//   { date: '2022-02-04' },
//   { date: '2022-02-05' },
//   { date: '2022-02-06' },
// ]
// const meetings = [
//   {
//     id: 1,
//     name: 'Leslie Alexander',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     start: '1:00 PM',
//     startDatetime: '2022-01-21T13:00',
//     end: '2:30 PM',
//     endDatetime: '2022-01-21T14:30',
//   },
//   // More meetings...
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
 
    const [addModal, setAddModal] = useState(false)
    const [taskArray, setTaskArray] = useState([
      {id: 1, title: 'Create Wireframe', date: '2023-09-10', timeStart: '10:00', timeEnd: '13:00', completed: false, },
      {id: 2, title: 'Do assignment', date: '2023-09-10', timeStart: '13:30', timeEnd: '14:00', completed: false, },
      {id: 3, title: 'Eat Launch', date: '2023-09-11', timeStart: '14:00', timeEnd: '14:30', completed: false, },
      {id: 4, title: 'Sprint Meeting', date: '2023-09-12', timeStart: '14:30', timeEnd: '15:00', completed: false, },
      {id: 5, title: 'Directors Meeting', date: '2023-09-13', timeStart: '15:00', timeEnd: '17:00', completed: false, },
      {id: 6, title: 'Visit the Groceries', date: '2023-09-13', timeStart: '17:00', timeEnd: '17:30', completed: false, },
      {id: 7, title: 'Quality Assurance', date: '2023-09-14', timeStart: '17:30', timeEnd: '18:00', completed: false, },
      {id: 8, title: 'Code Review', date: '2023-09-16', timeStart: '22:30', timeEnd: '23:00', completed: false, },
      {id: 9, title: 'Evening Sprint', date: '2023-09-20', timeStart: '12:30', timeEnd: '14:00', completed: false, },
      {id: 10, title: 'Visit the Gym', date: '2023-09-21', timeStart: '14:30', timeEnd: '15:00', completed: false, },
      {id: 11, title: 'Prepare Dinner', date: '2023-09-22', timeStart: '11:30', timeEnd: '12:00', completed: false, },
      {id: 12, title: 'Go to bed', date: '2023-09-22', timeStart: '19:30', timeEnd: '20:00', completed: false, },
  ])
  const [editIndex, setEditIndex] = useState()
  const [taskClicked, setTaskClicked] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const [DisplayTaskModal, setDisplayTaskModal] = useState(false)
  const [displayAddTaskModal, setDisplayAddTaskModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)


  useEffect(()=>{
    console.log('edit index: ', editIndex)
  }, [editIndex])

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = taskArray.slice(firstPostIndex, lastPostIndex)

  const handleDeleteTask = (value) => {
    const newArray = [...taskArray]
    newArray.splice(value, 1)
    setTaskArray(newArray)
}

   
  return (
    <div className=''>
        {taskClicked || addModal || showEditModal ? <div className='fixed z-0 top-0 left-0 w-screen h-screen bg-slate-200 opacity-60 md:hidden'></div>: null}

      {taskClicked && <div className='absolute top-14 z-20 md:hidden'>
        <DisplayTask taskArray={taskArray} setTasks={setTaskArray} id={editIndex} setTaskClicked={setTaskClicked} showEdit={setShowEditModal} setDisplayTaskModal={setDisplayTaskModal} setOpenDeleteModal={setOpenDeleteModal} />
      </div>}
      {addModal && <div className='absolute top-14 z-20 md:hidden'>
        <Task closeModal={setAddModal} taskArray={taskArray} setTasks={setTaskArray} setDisplayAddTaskModal={setDisplayAddTaskModal} />
      </div>}
      {showEditModal && <div className='absolute top-14 z-20 md:hidden'>
        <EditTask closeModal={setAddModal} editIndex={editIndex} taskArray={taskArray} updateTask={setTaskArray} closeEdit={setShowEditModal} setTaskClicked={setTaskClicked}  />
      </div>}

      {openDeleteModal && <DeleteModal handleDelete={handleDeleteTask} taskArray={taskArray} closeModal={setOpenDeleteModal} id={editIndex} />}


        <Header func={setAddModal} setDisplayAddTaskModal={setDisplayAddTaskModal} />
        <div className={`md:grid md:grid-cols-5 lg:grid-cols-3 gap-0 md:divide-x md:divide-gray-200 -z-30`}>
        <section className={`mt-12 md:mt-0 md:p-4 md:col-span-3 lg:col-span-2 md:mr4 lg:mr-14 shadow-lg pb-4 `}>


          


            <TopCalendar />
            <TaskContainer tasks={currentPost} editIndex={editIndex} taskArray={taskArray} setTasks={setTaskArray} handleEditIndex={setEditIndex} setTaskClicked={setTaskClicked} closeNewModal={setAddModal} setDisplayTaskModal={setDisplayTaskModal} />
            <Pagination totalPosts={taskArray.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </section>
        <div className="md:col-span-2 lg:col-span-1 border-none hidden md:block">
            {addModal ? 
            <Task closeModal={setAddModal} taskArray={taskArray} setTasks={setTaskArray} /> : taskClicked ? 
            <DisplayTask taskArray={taskArray} tasks={currentPost} setTasks={setTaskArray} id={editIndex} setTaskClicked={setTaskClicked} showEdit={setShowEditModal} setOpenDeleteModal={setOpenDeleteModal} /> : showEditModal ?
            <EditTask closeModal={setAddModal} editIndex={editIndex} taskArray={taskArray} updateTask={setTaskArray} closeEdit={setShowEditModal} /> :
            <ReactCalendar onClickDay={(date) => console.log(date)} minDate={new Date()} />}
        </div>
        
        </div>
    </div>
  )
}
