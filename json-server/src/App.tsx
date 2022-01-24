import React from 'react'
import {
  Link
} from "react-router-dom";
import SwitchTab from './molecules/SwitchTab';
function App(){
  return (
    <>
      <div>
        <nav>
          <ul style={{listStyleType:'none',margin: '0',padding: '0'}}>
          <li style={{float:'right'}}>
              <Link to="/contact" 
              style={{display: 'block',textAlign: 'center',padding: '14px 16px',textDecoration: 'none'}}>contact</Link>
            </li>
            <li style={{float: 'right'}}>
              <Link to="/home" 
              style={{display: 'block',textAlign: 'center',padding: '14px 16px',textDecoration: 'none'}}>home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
      <SwitchTab/>
</>
  );
}
export default App;