import React from "react";
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