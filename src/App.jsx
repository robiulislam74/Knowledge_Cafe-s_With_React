import { useState } from 'react'
import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Card_Container from './components/Card_Container/Card_Container'
import Navbar from './components/Header/Navbar'

function App() {
  const [bookMarks,setBookMarks] = useState([])
  const [readingTimes,setReadingTimes] = useState(0)

  const handleBookmarkAdd = (bookMark) =>{
    const isExist = bookMarks.find(allBooks => allBooks.id == bookMark.id)
    if(isExist){
      return alert('Already BookMark added!')
    }
    setBookMarks([...bookMarks,bookMark])
  }

  const handleReadingTimeAdd = (readingTime) =>{
    setReadingTimes(readingTimes+readingTime)
  }


  return (
    <div className='lg:px-0 px-6'>
      <div className='max-w-screen-lg mx-auto'>
      <Navbar></Navbar>
      </div>
      <div className='grid md:grid-cols-3 max-w-screen-lg mx-auto mt-8 gap-8'>
      <div className='grid md:col-span-2'>
      <Card_Container 
      handleBookmarkAdd={handleBookmarkAdd}
      handleReadingTimeAdd={handleReadingTimeAdd}
      ></Card_Container>
      </div>
      <Bookmark 
      bookMarks={bookMarks} 
      readingTimes={readingTimes}
      ></Bookmark>
      </div>
    </div>
  )
}

export default App
