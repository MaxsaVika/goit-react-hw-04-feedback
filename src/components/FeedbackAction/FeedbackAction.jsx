import React from "react";
import {FeedbackList, FeedbackItem, FeedbackBtn} from './FeedbackAction.styled'

export default function FeedbackAction ({onLeaveFeedback}) {
    return (
                
        <FeedbackList>
            <FeedbackItem>
                <FeedbackBtn 
                onClick={() => onLeaveFeedback("good")} 
                type="button" 
                backgroundColor = {p => p.theme.colors.good}>GOOD</FeedbackBtn>
            </FeedbackItem>

            <FeedbackItem>
                <FeedbackBtn 
                onClick={() => onLeaveFeedback("neutral")} 
                type="button" 
                backgroundColor = {p => p.theme.colors.neutral}>NEUTRAL</FeedbackBtn>
            </FeedbackItem>

            <FeedbackItem>
                <FeedbackBtn 
                onClick={() => onLeaveFeedback("bad")} 
                type="button" 
                backgroundColor = {p => p.theme.colors.bad}>BAD</FeedbackBtn>
            </FeedbackItem>
        </FeedbackList>  
    )
}