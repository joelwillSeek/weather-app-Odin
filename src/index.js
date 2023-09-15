import get_data from "./weather_api";
import "./style.css";

/**
 * @type {HTMLInputElement}
 */
const input_city_name = document.querySelector(
  "div.enter_city input#city_name"
);
/**
 * @type {HTMLButtonElement}
 */
const button_search = document.querySelector("div.enter_city");
const heading1_country = document.querySelector(
  "div.country_info_display div.left h1.country"
);
const heading1_name = document.querySelector(
  "div.country_info_display div.left h1.name"
);
const heading1_region = document.querySelector(
  "div.country_info_display div.left h1.region"
);
const heading1_time = document.querySelector(
  "div.country_info_display div.left h1.time"
);
const h1_fahrenheit = document.querySelector(
  "div.country .right h1#fahrenheit"
);
const h1_celsius = document.querySelector("div.country .right h1#celsius");
const h1_humid = document.querySelector("div.country .right h1#humid");

button_search.addEventListener("click", () => {
  assign_data_to_ui();
});

let assign_data_to_ui = () => {
  /**
   * @type {{ country:String, name:String, region:String, localtime:String, temp_c:Number, temp_f:Number, humidity:Number }}
   * */
  let list_of_weather_data = get_data(input_city_name.value);
  heading1_country.textContent = list_of_weather_data.country;
  heading1_name.textContent = list_of_weather_data.name;
  heading1_region.textContent = list_of_weather_data.region;
  heading1_time.textContent = list_of_weather_data.localtime;
  h1_celsius.textContent = list_of_weather_data.temp_c;
  h1_fahrenheit.textContent = list_of_weather_data.temp_f;
  h1_humid.textContent = list_of_weather_data.humidity;
};

console.log(get_data("london"));
