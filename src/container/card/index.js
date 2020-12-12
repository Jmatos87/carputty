import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar'
import CardBody from '../../components/CardBody'

import bubbleBoyGif from '../../assets/images/500.gif'
import './styles.scss'
const fundingGoal = 5000;

const formattedPercentage = donation => {
    const formattedOutput =  (donation/fundingGoal * 100)
    return formattedOutput > 100 ? '100%' : formattedOutput + '%'
}

const fundsToGoal = totalDonation => {
    const diff = 5000 - totalDonation
    return diff
}

function App() {
    const [bubbleBoy, setBubbleBoy] = useState(false)
    const [totalDonors, addDonor] = useState(0)
    const [userDonation, setUserDonation] = useState('')
    const [totalDonation, addToTotalDontation] = useState(0)
    const [donationError, setDonatioError] = useState(false)


    
    const percent = formattedPercentage(totalDonation)
    let remainingFunds = fundsToGoal(totalDonation)
    let goalReached = false;
    if(remainingFunds < 0){
        remainingFunds = remainingFunds * -1
        goalReached = true;
    }

    const donationLogic = (userDonation) => {
        const formattedDonation = parseInt(userDonation)
        if(formattedDonation === 500){
            setBubbleBoy(true)
            setTimeout(()=> setBubbleBoy(false),5000)
        }
        if(formattedDonation < 5){
            //logic for user error
            setDonatioError(true)
        }else{
            addDonor(totalDonors+1)
            addToTotalDontation(totalDonation + parseInt(formattedDonation))
        }
    }

    const cardBodyProps = {goalReached, remainingFunds, totalDonors, userDonation,setDonatioError, setUserDonation, donationLogic, donationError}

    return (
        <div className='sandbox'>
            <div className='card'>
                <ProgressBar percent={percent}/>
                <CardBody {...cardBodyProps}/>
            </div>
            {bubbleBoy && (
                <div className='gifContainer'>
                    <img src={bubbleBoyGif} />
                </div>
            )}
        </div>
    );
}

export default App;
