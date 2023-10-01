import React from 'react'
import {  IconButton } from '@mui/material'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../Css/Header.css'
import { useDispatch } from 'react-redux';
import { SignOut } from '../Store/UserSlice';

const Header = () => {
const dispatch=useDispatch()
  const logouthandler=()=>{
    dispatch(SignOut())
  }

  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <ReorderIcon/>
            </IconButton>
            <img src="https://tse1.mm.bing.net/th?id=OIP.tbYslWBvkcYLN2qBVFt5QQHaGh&pid=Api&rs=1&c=1&qlt=95&w=135&h=118"alt='logo' className='logo'/>
        </div>
        <div className='header_middle'>
      <div className='search_mail'>
        <IconButton>
         <SearchIcon></SearchIcon>
        </IconButton>
        <input type='text' placeholder='search mail'/>
        <IconButton>
        <ExpandMoreIcon/>
        </IconButton>
      </div>
      </div>
      <div className='header_right'>
        <IconButton>
         <HelpOutlineIcon/>
        </IconButton>
        
        <IconButton>
         <SettingsIcon/>
        </IconButton>

        <IconButton>
         <AppsIcon/>
        </IconButton>
       
       <ExitToAppIcon onClick={logouthandler}/>
      </div>
    </div>
  )
}

export default Header
