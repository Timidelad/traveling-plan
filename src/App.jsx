import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import Testing from './Testing'

function App() {
  const [lists, setLists] = useState([]);

  //function to add list
  function updateList(x) {
    let myList = {
      id: lists.length + 1,
      item: x,
      isEditing: false,
      checkbox: false,

    }
    setLists([...lists, myList])
  }

  //function to update the checkbox
  function updateCheckbox(id) {
    let updatedList = lists.map((list) => (
      list.id === id ? { ...list, checkbox: !list.checkbox } : list
    ))
    setLists(updatedList)
  }

  //function to delete an item from the list
  function deleteItem(id) {
    let updatedList = lists.filter((list) => (
      list.id !== id
    ))
    setLists(updatedList)
  }

  //function to set isEditing to true
  function editIt(id) {
    let updatedList = lists.map((list) => (
      list.id === id ? { ...list, isEditing: true } : list
    ))
    setLists(updatedList)
  }

  //function to save list after Editing it
  function saveTodo(id, newText) {
    if (newText.trim() === '') {
      alert(`Input cannot be empty`)
      let newList = lists.filter((list) => (
        list.id !== id
      ));
      setLists(newList)
    } else {
      let updatedList = lists.map((list) => (
        list.id === id ? { ...list, item: newText, isEditing: false } : list
      ))
      setLists(updatedList)
    }
  }

  return (
    <div className='font-Nunito'>
      <Header updateList={updateList} />
      <Body
        lists={lists}
        updateCheckbox={updateCheckbox}
        deleteItem={deleteItem}
        editIt={editIt}
        saveTodo={saveTodo} />
      <Footer lists={lists} />
    </div>
  )
}


export default App