import './App.css';
import Home from './Components/Home/Home';
import Composemail from './Components/MailBody/Compose';
import MailBody from './Components/MailBody/MailBody';
import { useSelector } from 'react-redux';
import { SelectsendmessageIs } from './Store/ComposeSlice';
function App() {
  const isopen=useSelector(SelectsendmessageIs);
  return (
   
    <div className="App">
      <Home/>
      <MailBody/>
     {
      isopen && <Composemail/>
     }
    </div>
  );
}

export default App;
