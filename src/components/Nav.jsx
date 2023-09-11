import { Fragment } from 'react'
import settingIcon from '../assets/icons/settingsIcon.svg'
import bellIcon from '../assets/icons/bellIcon.svg'
import avatar from '../assets/imgs/Avatar.png'


export default function Nav() {

    // const generateYearArray = ()=>{
    //     const startDate = startOfYear(new Date());
    //     const endDate = endOfYear(new Date());
    //     return eachDayOfInterval({ start: startDate, end: endDate });
    // }

    // const yearArray = generateYearArray()
    // const january = yearArray.filter((date)=> format(date, 'MMMM') === 'January')
    // console.log(january)
  return (

    <div className='flex justify-between py-3 border-b'>
        <p className='font-bold text-xl'>Todo</p>
        <div className='flex gap-4'>
            <img src={settingIcon} alt="" />
            <img src={bellIcon} alt="" />
            <img src={avatar} alt="" />
        </div>
    </div>
    
  )
}
