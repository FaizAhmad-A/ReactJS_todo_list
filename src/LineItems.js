import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({list,handleCheck,delWork}) => {
  return (
    <li className='item' key={list.id} >
        <input type="checkbox" checked={list.checked} 
            onChange={()=>handleCheck(list.id)} />
        <label onClick={()=>handleCheck(list.id)}
            style={list.checked ? {textDecoration:"line-through"}:null} >
            {list.work}
        </label>
        <FaTrashAlt type='button' tabIndex="0" 
            onClick={()=>delWork(list.id)} />
    </li>
  )
}

export default LineItems