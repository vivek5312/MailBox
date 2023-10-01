import React from "react";
import { IconButton } from "@mui/material";
import '../../Css/Emailbody.css'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Openmessage } from "../../Store/mailSlice";
const Emailbody = ({name,subject,msg,time,id, onDelete}) => {
const navigate=useNavigate();
const dispatch=useDispatch();

const Setmail=()=>{
dispatch(Openmessage({
  name,
  subject,
  msg,
  time,
  id,
}))
navigate('/mails')
}

const handleDelete=()=>{

  onDelete(id)
}

  return (
    <div className="emailbody" >
      <div className="email_left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>

        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
        <p>{name}</p>
      </div>
      <div className="email_middle">
        <div className="email_middle_message">
          <p onClick={Setmail}>
            <b>{subject} </b> <span> {msg}  </span>
          </p>
        </div>
      </div>
  
      <div className="email_right">
        <button onClick={handleDelete}>Delete</button>
        <p>{time}</p>
     
      </div>
      
    </div>
  );
};

export default Emailbody;
