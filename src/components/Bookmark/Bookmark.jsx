import React from 'react'

const Bookmark = ({bookMarks,readingTimes}) => {
  console.log(bookMarks)
  return (
    <div>
      <div className='p-4 bg-slate-200 font-bold text-lg lg:text-xl rounded-lg mb-6 border border-purple-500'>
      <h4>Spent time on read : {readingTimes} min</h4>
      </div>
    <div className='bg-gray-100 p-4 rounded-lg'>
    <h3 className='font-bold text-lg lg:text-xl mb-6'>Bookmarked Blogs : {bookMarks.length}</h3>
      {bookMarks.map(bookMark => <div className='bg-white p-2 rounded-lg font-medium mb-3'>
        <p>{bookMark.title}</p>
        </div>)}
    </div> 
    </div>
  )
}

export default Bookmark
