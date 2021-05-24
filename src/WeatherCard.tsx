import React from 'react';
import {WeatherReportItem} from "./awf.model";

interface WeatherCardProps {
    weather?: WeatherReportItem
}

function WeatherCard(props: WeatherCardProps) {

    function formatTime(unixTime: number | undefined) {
        return unixTime ? new Date(unixTime * 1e3).toLocaleDateString("en-US", {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }) : "";
    }

    if (!props.weather) {
        return (<div className="awf-weather-card">
            <div className={"awf-weather-icon"}>
            </div>
            <p className={"awf-label"}>Fill in all the fields and the weather will be displayed</p>
        </div>);
    }

    return (
        <div className="awf-weather-card _filled">
            <div className="awf-weather-card__date">
                {formatTime(props.weather.dt)}

            </div>
            <div className="awf-weather-card__icon">
                {props.weather.icon}

            </div>
            <div className="awf-weather-card__temp">
                {(props.weather.temp && props.weather.temp > 0) ? '+' : '-'}
                {props.weather.temp}°

            </div>
        </div>
    );
}

export default WeatherCard;
