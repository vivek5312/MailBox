import React, { useEffect, useState } from 'react';
import EmaillistSeeting from './EmaillistSeeting';


import { db } from '../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../../Css/Send.css';

const Send = () => {
  const [emaildata, setemaildata] = useState([]);

  const getData = async () => {
    const valueRef = collection(db, 'emails');
    const datadb = await getDocs(valueRef);
    const alldata = datadb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setemaildata(alldata);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='send'>
      <h1>Send Box</h1>
      <div className="email_list">
        <EmaillistSeeting />
        
        {emaildata.map(({ id, to, subject, message, timeStamp }) => (
          <div key={id}>
            <h3>{to}</h3>
            <p>{subject}</p>
            <br />
            <span>{message}</span>
            <br />
            <p>{timeStamp ? new Date(timeStamp.seconds * 1000).toLocaleTimeString() : ''}</p>
            <p>Delete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Send;


