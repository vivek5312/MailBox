import React from "react";
import '../../Css/Compose.css'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import HeightIcon from "@mui/icons-material/Height";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import { CloseCompose } from "../../Store/ComposeSlice";




const Composemail = () => {
  const dispatch=useDispatch();

  const cancelbutton = () => {
   
  };
  const [to, setto] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const EmailformSubmit = async (event) => {
    event.preventDefault();
    if (to === "" || subject === "" || message === "") {
      return alert("Please Fill in All Fields");
    }
  
    try {
      console.log("Sending email:", { to, 
        subject, 
        message,
       timeStamp: new Date(),
       }); // Log the data being sent
      const valueRef = collection(db, "emails");
      await addDoc(valueRef, { to, subject, message,timeStamp: new Date(), });
     
      setto("");
      setsubject("");
      setmessage("");
      alert("Email sent successfully");
      
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email. Please try again later.");
    }
  };
  
  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_left">
          <span>New Message</span>
        </div>
        <div className="compose_Right">
          <RemoveOutlinedIcon />
          <HeightIcon />
          <CloseOutlinedIcon onClick={()=>dispatch(CloseCompose())} />
        </div>
      </div>
      <form onSubmit={EmailformSubmit}>
        <div className="compose_body">
          <div className="compose_bodyform">
            <input
              type="email"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setto(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
            <textarea rows={20} onChange={(e) => setmessage(e.target.value)}>
              {message}
            </textarea>
          </div>
        </div>
        <div className="compose_footer">
          <div className="footer_left">
            <button type="submit" >
              Send
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className="footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <AddPhotoAlternateIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Composemail;