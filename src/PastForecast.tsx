import React, {useEffect, useState} from 'react';
import CitySelector from "./CitySelector";
import WeatherPanel from "./WeatherPanel";
import {AWFCity} from "./awf.model";

export interface PastForecastState {
    city?: AWFCity,
    date?: Date
}

function PastForecast() {
    const [city, setCity] = useState(undefined);
    const [date, setDate] = useState(undefined);

    const today: Date = new Date();
    const maxDate = today.toISOString().substring(0, 10);

    return (<div className="awf-past-forecast awf-forecast-card">
        <h1 className="awf-forecast-card_label">Forecast for a Date in the Past</h1>
        <div>
            <CitySelector onChange={(event: any) => setCity(event)}/>
            <input className={"awf-field"} type="date" max={maxDate}
                   onChange={(event: any) => setDate(event.target.valueAsDate)}></input>
        </div>
        <WeatherPanel city={city} date={date} weekly={false}/>
    </div>);
}

export default PastForecast;
