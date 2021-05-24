import React, {useEffect, useState} from 'react';
import {AWFCity, WeatherReportItem} from "./awf.model";
import {WEATHER_IN_PAST_API_ROUTE, WEATHER_MAP_API_KEY, WEEKLY_WEATHER_API_ROUTE} from "./constant";
import axios from "axios";
import WeatherCard from './WeatherCard';

interface WeatherPanelProps {
    city?: AWFCity,
    weekly: boolean,
    date?: Date
}

function WeatherPanel(props: WeatherPanelProps) {
    const [weatherReports, setWeatherReports] = useState<WeatherReportItem[]>([]);
    let startViewIndex: number = 0;
    const MAX_CARDS_NUMBER: number = 3;

    useEffect(() => {
        console.log("WeatherPanel Use effect hook worked");
        if (!weatherReports.length) {
            if (!!props?.city && !!props.date) {
                getDailyWeatherReport(props.city, props.date);
            }

            if (!!props?.city && props.weekly) {
                getWeeklyWeatherReport(props.city);
            }
        }
    });

    function buildPath(apiURL: string, latitude: number, longitude: number, certainDate?: Date): string {
        const url = new URL(apiURL);
        const pathParams = url.searchParams;
        pathParams.set('lat', latitude.toString());
        pathParams.set('lon', longitude.toString());
        if (certainDate) {
            pathParams.set('dt', (certainDate.getTime() / 1000).toString());
        }

        pathParams.set('appid', WEATHER_MAP_API_KEY);
        url.search = pathParams.toString();
        console.log("url: " + url);
        return url.toString();
    }

    function parseResponse(result: any): void {
        console.log("Response: " + result.data);
        if (props.weekly) {
            if (Array.isArray(result.data.daily) && result.data.daily.length > 0) {
                const reports: WeatherReportItem[] = [];
                result.data.daily.forEach((el: any) => {
                    const weather: WeatherReportItem = {
                        temp: el.temp.max,
                        dt: el.dt,
                        icon: Array.isArray(el.weather) && el.weather.length > 0 ? el.weather[0].icon : ""
                    }
                    reports.push(weather);
                });
                setWeatherReports(reports);
            }
        } else {
            if (result.data.current) {
                const report: WeatherReportItem = {
                    temp: result.data.current.temp,
                    dt: result.data.current.dt,
                    icon: Array.isArray(result.data.current.weather) && result.data.current.weather.length > 0 ? result.data.current.weather[0].icon : ""
                }
                setWeatherReports([report]);
            }
        }

    }

    function getDailyWeatherReport(city: AWFCity, certainDate: Date): void {
        axios.get(buildPath(WEATHER_IN_PAST_API_ROUTE, city.latitude, city.longitude, certainDate))
            .then(
                (result: any) => {
                    parseResponse(result);
                },
                (error) => {
                    console.log("Error occurred: " + error);
                }
            )
    }

    function getWeeklyWeatherReport(city: AWFCity): void {
        axios.get(buildPath(WEEKLY_WEATHER_API_ROUTE, city.latitude, city.longitude))
            .then((result: any) => {
                    parseResponse(result);
                },
                (error) => {
                    console.log("Error occurred: " + error);
                }
            );
    }

    if (Array.isArray(weatherReports) && weatherReports.length > 0) {
        if (weatherReports.length === 1) {
            return (<div className="awf-weather-report">
                <WeatherCard weather={weatherReports[0]}/>
            </div>);
        }

        const weatherCards = weatherReports?.map((report: WeatherReportItem) => <WeatherCard weather={report}/>);

        return (<div className="awf-weather-report">
            <button className="awf-weather-report_button _left"></button>
            {weatherCards.slice(startViewIndex, MAX_CARDS_NUMBER)}
            <button className="awf-weather-report_button _right"></button>
        </div>);
    }

    return (<div className="awf-weather-report _empty">
        <WeatherCard/>
    </div>);
}

export default WeatherPanel;
