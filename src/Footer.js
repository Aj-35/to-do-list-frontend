import React from 'react'

const Footer = ({items}) => {
  return (
    <footer>
       <p> {items.length} {items.length === 1 ? "Task" : "Tasks"}</p>
    </footer> 
  )
}

export default Footer