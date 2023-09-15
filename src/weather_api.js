const api_key = "f6aedda0032042e1812150300231109";

/**
 *
 * @param {String} location
 */
async function get_weather(location) {
  if (location.length <= 0) return;
  const weather_api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
  let response = await fetch(weather_api_url);
  let response_json = await response.json();
  return response_json;
}

export default get_weather;
