export const getToLocation = async (lat, long) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,snowfall,weather_code,pressure_msl`;

    const result = await fetch(url)
    const data = await result.json();
    if (!data) return console.log("Geo API Fatched failed");

    const { is_day, temperature_2m, wind_speed_10m, relative_humidity_2m, apparent_temperature, rain, snowfall } = data.current;
    return ({
        temperature: temperature_2m,
        humidity: relative_humidity_2m,
        feelsLike: apparent_temperature,
        isDay: is_day,
        windSpeed: wind_speed_10m,
        rain: rain,
        snowfall: snowfall
    })
}