export async function getGeoLocation(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
    const result = await fetch(url);
    const data = await result.json();
    if (!data) return console.log("Fetching GeoCoding failed");
    const { name, latitude, longitude, country, country_code } = data.results[0];
    return ({
        name: name,
        lat: latitude,
        long: longitude,
        country: country,
        country_code: country_code
    });

}