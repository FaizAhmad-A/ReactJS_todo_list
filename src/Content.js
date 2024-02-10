import React from 'react'
import ListItems from './ListItems';

const Content = ({list,handleCheck,delWork}) => {
    
  return (
    <section>
      {list.length ?(
        <ListItems
        list = {list}
        handleCheck = {handleCheck}
        delWork = {delWork}
        />
      ): (<p style={{marginTop:"50%"}} >Your List is Empty</p> )}
    </section>
  )
}

export default Content