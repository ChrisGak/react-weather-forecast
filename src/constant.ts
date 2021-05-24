export const WEATHER_MAP_API_KEY: string = "40537f711a3e40204f77fbad85878b95";

// See https://openweathermap.org/api/one-call-api
export const WEEKLY_WEATHER_API_ROUTE: string = "https://api.openweathermap.org/data/2.5/onecall?units=metric&lat={lat}&lon={lon}&appid={API key}";
// See https://openweathermap.org/api/one-call-api#history
export const WEATHER_IN_PAST_API_ROUTE: string = "https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat={lat}&lon={lon}&dt={time}&appid={API key}";

// Weather icons, see https://openweathermap.org/weather-conditions
export const WEATHER_ICONS_API_ROUTE: string = "http://openweathermap.org/img/wn/{icon}@2x.png";
