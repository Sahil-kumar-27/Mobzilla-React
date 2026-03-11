import React from 'react'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 justify-center mb-4'>
        <input
            type='text'
            value={term}
            onChange={(e)=> setTerm(e.target.value)}
            placeholder='Search Movies.....'
            className='input input-success'
        />
    </form>
  )
}

export default SearchBar
