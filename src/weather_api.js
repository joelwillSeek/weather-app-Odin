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

let get_data = (location) => {
  let country;
  let name;
  let region;
  let localtime;
  let temp_c;
  let temp_f;
  let humidity;

  get_weather(location).then((response) => {
    country = response.location.country;
    name = response.location.name;
    region = response.location.region;
    localtime = response.location.localtime;
    temp_c = response.current.temp_c;
    temp_f = response.current.temp_f;
    humidity = response.current.humidity;
  });

  return { country, name, region, localtime, temp_c, temp_f, humidity };
};

export default get_data;
