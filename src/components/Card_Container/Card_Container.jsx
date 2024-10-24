import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Card_Container = ({handleBookmarkAdd,handleReadingTimeAdd}) => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        fetch('blogs_fake_data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

  return (
    <>
      {
        cards.map(card => <Card key={card.id} card={card} 
          handleBookmarkAdd={handleBookmarkAdd}
          handleReadingTimeAdd={handleReadingTimeAdd}
          ></Card>)
      }
    </>
  )
}

export default Card_Container
