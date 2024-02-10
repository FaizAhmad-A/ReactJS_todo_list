import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='addItems' onSubmit={(e) => e.preventDefault(e)}>
        <label htmlFor="searching">Search</label>
        <input 
            type="text" 
            placeholder='Search'
            role='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem