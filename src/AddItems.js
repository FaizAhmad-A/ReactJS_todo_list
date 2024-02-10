import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({newItem, setNewItem, handleSubmit}) => {
  return (
        <form className='addItems' onSubmit={handleSubmit} >
            <label htmlFor="addWork">Add Work</label>
            <input type="text" 
                   placeholder='Add Your Work'
                   id='addWork' 
                   autoFocus
                   required
                   value={newItem}
                   onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit' aria-label='Add Items'>
                <FaPlus />
            </button>
        </form>
  )
}

export default AddItems