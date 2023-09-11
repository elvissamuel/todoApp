import React from 'react'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage, }) => {
    let pages = []

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='my-6 text-center'>
      {pages.map((page, index) => (
        <button key={index} className= {`w-[40px] h-[30px] mx-1 text-sm font-semibold shadow rounded-sm ${page == currentPage ? 'bg-slate-700 text-white' : 'bg-slate-100'} `} onClick={()=>setCurrentPage(page)}>{page}</button>
      ))}
    </div>
  )
}

export default Pagination
