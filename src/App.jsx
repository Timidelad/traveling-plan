import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState([]);

  function updateList(x) {
    let myList = {
      id: lists.length + 1,
      item: x,
      isEditing: false,

    }
    setLists([...lists, myList])
  }
  return (
    <div className='font-Nunito'>
      <Header updateList={updateList} />
      <Body lists={lists} />
      <Footer />
    </div>
  )
}

export default App