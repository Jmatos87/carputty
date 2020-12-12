import React, { useState } from 'react';
import './styles.scss'

function ProgressBar(props) {
    const { percent } = props
    const completeProgress = '8px 8px 0px 0px'
    const partialProgress = '8px 0px 0px 0px'

    return (
        <div className='progressBar'>
            <div className='progressFill' 
                style={{width: percent, borderRadius: percent === '100%' ? completeProgress : partialProgress }}
            />
        </div>
    );
}

export default ProgressBar;
