import React from 'react'
import { Button } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import '../../Css/Sidebar.css'
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendIcon from '@mui/icons-material/Send';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useDispatch } from 'react-redux';
import { OpenCompose } from '../../Store/mailSlice';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const dispatch=useDispatch()
 
  return (
    <div className='sidebar'>
   <Button startIcon={<CreateIcon />} className='compose_btn' onClick={()=>dispatch(OpenCompose())}> Compose</Button>
   <div >
      <Link to='/'><SidebarOption Icon={InboxIcon } title="Inbox" number="10" className='sidebar_icon'/></Link>
      <SidebarOption Icon={StarRateIcon } title="Started" number="10" className='sidebar_icon'/>
      <SidebarOption Icon={WatchLaterOutlinedIcon} title="Snoozed" number="10" className='sidebar_icon'/>
      <Link to='/send'><SidebarOption Icon={SendIcon } title="Send" number="24" className='sidebar_icon' /></Link>
      <SidebarOption Icon={DraftsOutlinedIcon  } title="Drafts" number="10" className='sidebar_icon'/>
      </div>
    </div>
  )
}

export default Sidebar