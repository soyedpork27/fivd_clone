import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";

function Topbar(props) {
  return (
    <div className='Topbar'>
      <FaAngleLeft className='prev_icon' />

      <h1 className='top-title'>피벗</h1>

      <div className='top-my_icon'>
        MY
      </div>
      
    </div>
  );
}

export default Topbar;