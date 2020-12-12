import React, { useState } from 'react';
import './styles.scss'

function App() {
    var percent = '10%'
    var completeProgress = '8px 8px 0px 0px'
    var partialProgress = '8px 0px 0px 0px'
    return (
        <div className='sandbox'>
        <div className='card'>
            <div className='progressBar'>
                <div className='progressFill' 
                    style={{width: percent, borderRadius: percent === '100%' ? completeProgress : partialProgress }}
                />
            </div>
            <div className='cardBody'>
                <div className='fundContainer'>
                    <p><b><sup>$</sup>1,250</b> still needed to fund this project</p>
                    <div className='arrow-down'></div>
                </div>
                <div className='infoContainer'>
                    <h2>Only four days left to fund this project</h2>
                    <p>Join the <b>11</b> other donors who have already supported this project.</p>
                </div>
                <div className='inputContainer'>
                    <span className='dollar'>$</span>
                    <input type='number'/>
                    <button>Give Now</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
