import React from 'react'
import { CiBookmark } from "react-icons/ci";

const Card = ({card,handleBookmarkAdd,handleReadingTimeAdd}) => {
    const {cover,author_name,author_profile,title,posted_date,reading_time,hashtag} = card
  return (
    <div className='md:p-6 mb-6 rounded-lg md:border-2 shadow-lg md:shadow-none'>
      <div>
        <img src={cover} alt="" className='rounded-lg' />
      </div>
      <div className='md:flex justify-between items-center mt-6'>
        <div className='flex items-center gap-x-3'>
          <img className='w-14' src={author_profile} alt="" />
          <div>
            <p className='font-bold text-xl'>{author_name}</p>
            <span className='font-semibold text-gray-500'>{posted_date}</span>
          </div>
        </div>
        <div className='flex gap-x-2 items-center'>
         <span className='text-lg md:ml-0 ml-16 md:mt-0 mt-2 text-gray-500 font-medium'>{reading_time} minute read</span>
          <CiBookmark onClick={()=> handleBookmarkAdd(card)} className='text-xl'/>
        </div>
      </div>
      <div className='space-y-4 mt-4'>
        <h3 className='font-bold md:text-2xl text-xl leading-relaxed'>{title}</h3>
        <div className='text-lg text-gray-500 font-medium'>
          {hashtag.map(hashtag => <span className='mr-3'>{hashtag}</span> )}
        </div>
        <button onClick={()=>handleReadingTimeAdd(reading_time)} className='cursor-pointer text-blue-500 font-medium underline'>Mark as read</button>
      </div>
    </div>
  )
}

export default Card
