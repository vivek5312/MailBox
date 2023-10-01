import React from 'react'
import { Icon } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../Css/EmailList.css'
import { useNavigate } from 'react-router-dom';
import { Selectmail } from '../../Store/mailSlice';
import { useSelector } from 'react-redux';

const EmailDeatils = () => {
    const navigate=useNavigate()
  
 const mail=useSelector(Selectmail)
 console.log(mail)
  return (
    <div className='emaildeatils'>
   
      <div className='email_Setting'>
        <div className='email_setting_left'>
      <Icon>
        <ArrowBackIcon onClick={()=>navigate('/')}/>
         </Icon>
         <Icon>
        < ArrowDropDownIcon />
         </Icon>
         <Icon>
        <RefreshIcon/>
         </Icon>
         <Icon>
        <MoreVertIcon/>
         </Icon>
         </div>
         </div>
         <h4>This is Subject</h4>
         <div className='body'>
         <div className='emailDetails_header'>
         <h5>{mail.subject}</h5>
            <p>{mail.name}</p>
           
         </div>
         
         <div className='email_time'>
            <h6> </h6>
            <p>{mail.time}</p>
         </div>
         
         </div>
         <div className='eamil_details_body'>
            <p>{mail.msg}</p>
         </div>
    </div>
  )
}

export default EmailDeatils
