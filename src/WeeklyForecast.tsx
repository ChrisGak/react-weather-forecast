import React from 'react';
import CitySelector from './CitySelector';
import WeatherPanel from "./WeatherPanel";
import {AWFCity} from "./awf.model";

export interface WeeklyForecastState {
    city?: AWFCity
}

class WeeklyForecast extends React.Component<{}, WeeklyForecastState> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: undefined
        }
    }

    handleCityChange(city: AWFCity) {
        this.setState({city})
    }

    render() {
        return (<div className="awf-weekly-forecast awf-forecast-card">
            <h1 className="awf-forecast-card_label">7 Days Forecast</h1>
            <CitySelector onChange={(event: any) => this.handleCityChange(event)}/>
            <WeatherPanel city={this.state.city} weekly={true}/>
        </div>);
    }
}

export default WeeklyForecast;
