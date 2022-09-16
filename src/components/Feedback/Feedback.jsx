import React, { Component } from "react";
import FeedbackSection from '../Section/Section'
import FeedbackAction from '../FeedbackAction/FeedbackAction'
import Statistics from '../Statistics/Statistics'
import {InfoMessage} from 'constans/InfoMessage.styled'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    leaveFeedback = (propertyName) => {
        this.setState ((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value +1
            }
        })
    }

    countTotalFeedback() {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage(){
        const {good} = this.state;
        const total = this.countTotalFeedback()
        if (!total) {
            return 0
        }
        const result = (good / total) * 100;
        return Number(result.toFixed(0));
    }

    render (){
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage= this.countPositiveFeedbackPercentage();

        return (
            <>
            <FeedbackSection title = "Please leave feedback" >
                <FeedbackAction 
                    onLeaveFeedback = {this.leaveFeedback}/>
            </FeedbackSection>
            
            <FeedbackSection title = "Statistics" >
              {!total ? <InfoMessage>There is no feedback</InfoMessage> :   
                    <Statistics 
                    good = {good} 
                    neutral={neutral} 
                    bad = {bad}
                    total = {total}
                    positivePercentage={positivePercentage}/>}
            </FeedbackSection>
                    
            </>
        )
    }
}

export default Feedback