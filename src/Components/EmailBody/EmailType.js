import React from 'react'
import { IconButton } from '@mui/material'
import '../../Css/EmailList.css'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
const EmailType = () => {
  return (
    <div className='emailtype'>
        <div className='emailtype_optin emailtype_optin--active'>
        <IconButton>
        <InboxIcon/>
        <p>Primary</p>
        </IconButton>
        </div>
        <div className='emailtype_optin'>
        <IconButton>
        <PeopleAltOutlinedIcon/>
        <p>Social</p>
        </IconButton>
        </div>
        <div className='emailtype_optin'>
        <IconButton>
        <LocalOfferOutlinedIcon/>
        <p>Promotions</p>
        </IconButton>
        </div>

      
    </div>
  )
}

export default EmailType
