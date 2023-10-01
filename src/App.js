import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { SelectsendmessageIs, } from './Store/mailSlice';
import Emaillist from "./Components/EmailBody/Emaillist";
import Header from "./Components/Header";
import Sidebar from "./Components/SideMenu/Sidebar";
import Composemail from "./Compose/Composemail";
import Send from "./Components/EmailBody/Send";
import EmailDeatils from "./Components/EmailBody/EmailDeatils";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Selectuser, SignIn, SignOut } from "./Store/UserSlice";
import { auth } from "./Components/Firebase/Firebase";
import { useDispatch } from "react-redux";
function App() {
  const dispatch=useDispatch()
  const isopen = useSelector(SelectsendmessageIs);
const UserIs=useSelector(Selectuser)

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(SignIn({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      }))
    }
    else{
      dispatch(SignOut())
    }
  })
},[])

  return (
    <div className="App">
      <Router>
        {UserIs ? (
          <>
            <Header />
            <div className="side_app">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Emaillist />} />
                <Route path="/mails" element={<EmailDeatils />} />
                <Route path="/send" element={<Send />} />
              </Routes>
              {isopen && <Composemail />}
            </div>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;

