import React, { useState } from 'react';
import './styles.scss'

function App() {
  return (
    <div className='sandbox'>
      <div className='card'>
        <div className='progressBar'></div>
        <div className='cardBody'>
            <h2>Only 4 days left to fund this project</h2>
            <p>Join the 11 other donors who have already supported this project.</p>
            <div className='inputContainer'>
                <input type='number'/>
                <button>Give Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
