import './App.css';
import Card from './Components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';




function App() {

  const[user, setUser] = useState([]);
  const[click, setClick] = useState(true)

  const url = "https://randomuser.me/api/";
  


  async function getUser() {
    try {
      const response = await axios.get(url);
      console.log(response);
      setUser(response.data.results);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  },[click]);

  const handleClick = () => {
    setClick(!click);
  };
  
  return (
    <div className="App">
      {user.map((userInfo) => {
        return <Card {...userInfo} />
      })}
        
      <button className='button' onClick={handleClick} >Random User</button>
      
      
    </div>
  );
}

export default App;
