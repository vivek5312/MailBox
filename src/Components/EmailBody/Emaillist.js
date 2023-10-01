import React, { useEffect, useState } from "react";
import EmaillistSeeting from "./EmaillistSeeting";
import "../../Css/EmailList.css";
import EmailType from "./EmailType";
import Emailbody from "./Emailbody";
import { db } from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";


const Emaillist = () => {
  const [emaildata, setemaildata] = useState([]);
  const getData = async () => {
    const valueRef = collection(db, "emails");
    const datadb = await getDocs(valueRef);
    const alldata = datadb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setemaildata(alldata);
    console.log(datadb);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelteEmail=(id)=>{
setemaildata((prevData)=>prevData.filter((email)=>email.id !==id))
  }

  return (
    <div className="email_list">
      <EmaillistSeeting />
      <EmailType />

      {emaildata.map(({ id, to, subject, message, timeStamp }) => (
        <Emailbody
          name={to}
          subject={subject}
          msg={message}
          time={ timeStamp ? new Date(timeStamp.seconds * 1000).toLocaleTimeString():''}
          key={id}
          onDelete={()=>handleDelteEmail(id)}
        />
      
      ))}

    </div>
  );
};

export default Emaillist;
