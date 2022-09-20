import React from "react";
import PropTypes from 'prop-types';
import {FeedbackList, FeedbackItem, FeedbackBtn} from './FeedbackAction.styled'

export default function FeedbackAction ({options, onLeaveFeedback}) {
    return (
                
        <FeedbackList>
            {options.map(option => {
                return (
                <FeedbackItem>
                    <FeedbackBtn 
                        key = {option}
                        onClick={() => onLeaveFeedback(option)} 
                        type="button" 
                        backgroundColor = {p => p.theme.colors.btn}>{option}</FeedbackBtn>
                </FeedbackItem> 
                )
            })}
        </FeedbackList>  
    )
}

FeedbackAction.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};