import React from "react";
import PropTypes from 'prop-types';
import {StatisticsList, StatisticItem} from './Statistics.styled'


export default function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
        <StatisticsList>
            <StatisticItem>Good:  {good}</StatisticItem>
            <StatisticItem>Neutral: {neutral}</StatisticItem>
            <StatisticItem>Bad: {bad}</StatisticItem>

        </StatisticsList>

        <StatisticsList>
             <StatisticItem>Total: {total}</StatisticItem>
            <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
        </StatisticsList>
        </>                 
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
  };