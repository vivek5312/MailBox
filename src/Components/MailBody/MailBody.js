import React from 'react'
import { Button } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import Sidebar from './Sidebar';
import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';
import '../../Css/MailBody.css'
import { useDispatch } from 'react-redux';
import { OpenCompose } from '../../Store/ComposeSlice';
const MailBody = () => {
  const dispatch=useDispatch()
  return (
    <div className='mailBody'>
      <div className='mail_header'>
      <h1>Inbox</h1>
      </div>
 
     
      <Button startIcon={<CreateIcon />} className='compose_btn' onClick={()=>dispatch(OpenCompose())} > Compose</Button>
      <Sidebar Icon={InboxIcon } title="Inbox" number="10" />
      <Sidebar Icon={SendIcon } title="Send" number="24" />
      </div>
    
  )
}

export default MailBody
