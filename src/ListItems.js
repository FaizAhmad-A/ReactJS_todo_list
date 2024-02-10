import React from 'react'
import LineItems from './LineItems';

const ListItems = ({list,handleCheck,delWork}) => {
  return (
    <ul>
            {list.map((list) =>(
                <LineItems 
                list = {list}
                key = {list.id}
                handleCheck = {handleCheck}
                delWork = {delWork}
                />
            ))}
        </ul>
  )
}

export default ListItems