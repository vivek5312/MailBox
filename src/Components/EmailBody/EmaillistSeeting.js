import React from 'react'
import { Icon } from '@mui/material'
import '../../Css/EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const EmaillistSeeting = () => {
  return (
    <div className='email_Setting'>
        <div className='email_setting_left'>
         <Icon>
        <CheckBoxOutlineBlankIcon/>
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
        <div className='email_setting_right'>
            <p>1-50 of 10,22</p>
            <Icon>
                <ChevronLeftIcon/>
            </Icon>
            <Icon>
            <ChevronRightIcon/>
            </Icon>
        </div>
    </div>
  )
}

export default EmaillistSeeting
