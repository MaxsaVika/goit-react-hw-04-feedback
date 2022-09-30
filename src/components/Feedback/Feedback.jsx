import { useState } from "react";
import FeedbackSection from '../Section/Section'
import FeedbackAction from '../FeedbackAction/FeedbackAction'
import Statistics from '../Statistics/Statistics'
import {InfoMessage} from 'constans/InfoMessage.styled'

export default function Feedback() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const options = {good, neutral, bad }

    const leaveFeedback = (propertyName) => {
        switch (propertyName) {
            case 'good':
                return setGood((prev) => prev + 1);
            case 'neutral':
                return setNeutral((prev) => prev + 1);
            case 'bad':
                return setBad((prev) => prev + 1);
            default:
                return;
        }

    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => { 
        if (!total) {
            return 0
        }
        
        const result = (good / total) * 100;
        return Number(result.toFixed(0));
    }

    return (
        <>
            <FeedbackSection title = "Please leave feedback" >
                <FeedbackAction 
                    options={Object.keys(options)}
                    onLeaveFeedback = {leaveFeedback}/>
            </FeedbackSection>
            
            <FeedbackSection title = "Statistics" >
              {!total ? <InfoMessage>There is no feedback</InfoMessage> :   
                    <Statistics 
                    good = {good} 
                    neutral={neutral} 
                    bad = {bad}
                    total = {total}
                    positivePercentage={countPositiveFeedbackPercentage()}/>}
            </FeedbackSection>                    
        </>
    )
}