import React from 'react'
import '../../Css/SidebarOption.css'
const SidebarOption = ({Icon,title,number,isActive}) => {
  return (
    <div className={`sidebar_option ${isActive && 'sidebar_option--active'}`}>
     <Icon/>
     <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption