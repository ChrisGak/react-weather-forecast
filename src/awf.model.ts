export interface AWFCity {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
}

export interface WeatherReportItem {
    temp?: number; //For temperature in Celsius and wind speed in meter/sec, use units=metric
    dt?: number; // Requested time
    icon?: string;
}

export const DEFINED_CITIES: AWFCity[] = [
    {
        id: "1",
        name: "Самара",
        latitude: 53.195873,
        longitude: 50.100193
    },
    {
        id: "2",
        name: "Тольятти",
        latitude: 53.507836,
        longitude: 49.420393
    },
    {
        id: "3",
        name: "Саратов",
        latitude: 51.533557,
        longitude: 46.034257
    },
    {
        id: "4",
        name: "Казань",
        latitude: 55.796127,
        longitude: 49.106405
    },
    {
        id: "5",
        name: "Краснодар",
        latitude: 45.035470,
        longitude: 38.975313
    }
];
