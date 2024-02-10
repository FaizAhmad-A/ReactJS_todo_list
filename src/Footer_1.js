import React from 'react'

const Footer = ({work}) => {
  let cur_year = new Date();
  return (
    <footer>
        <p>CopyRight @ {cur_year.getFullYear()}</p><span>list {work <= 1 ? "Item" : "Items" } : &nbsp;&nbsp;{work}</span>
    </footer>
  )
}

export default Footer