import React, { useState } from 'react';
import './styles.scss'

function CardBody(props) {
    const { goalReached, remainingFunds, totalDonors, userDonation,setDonatioError, setUserDonation, donationLogic, donationError } = props
    const completeProgress = '8px 8px 0px 0px'
    const partialProgress = '8px 0px 0px 0px'

    return (
        <div className='cardBody'>
            <div className='fundContainer'>
                {goalReached ? (
                    <p>We did it! We passed our goal by <b><sup>$</sup>{remainingFunds}</b>!!!</p>

                ) : (
                    <p><b><sup>$</sup>{remainingFunds}</b> still needed to fund this project</p>
                )}
                <div className='arrow-down'></div>
            </div>
            <div className='infoContainer'>
                <h2>Only four days left to fund this project</h2>
                <p>Join the <b>{totalDonors}</b> other donors who have already supported this project.</p>
            </div>
            <div className='inputContainer'>
                <span className='dollar'>$</span>
                <input type='number' 
                value={userDonation}
                onChange={(evt)=>{
                    const userInput = evt.target.value;
                    setDonatioError(false)
                    setUserDonation(userInput)
                }}/>
                <button disabled={userDonation === ''} onClick={()=>donationLogic(userDonation)}>Give Now</button>
            </div>
            {donationError && (
                <div className='errorContainer'>
                    <p>Minimum donation is $5. Pay up!</p>
                </div>
            )}
        </div>
    );
}

export default CardBody;
