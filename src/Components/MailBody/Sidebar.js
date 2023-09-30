import React from 'react'
import '../../Css/Sidebar.css'
const Sidebar = ({Icon,title}) => {
  return (
    <div className='sidebar'>
        <Icon/>
      <h3>{title}</h3>
    </div>
  )
}

export default Sidebar
