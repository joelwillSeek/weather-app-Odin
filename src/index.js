import get_weather from "./weather_api";
import "./style.css";
import loading_image from "./assets/loading.gif";

/**
 * @type {HTMLInputElement}
 */
const input_city_name = document.querySelector(
  "div.enter_city input#city_name"
);
/**
 * @type {HTMLButtonElement}
 */
const button_search = document.querySelector("div.enter_city button");
const heading1_country = document.querySelector(
  "div.country_info_display div.left h1.country"
);
const heading1_region = document.querySelector(
  "div.country_info_display div.left h1.region"
);
const heading1_time = document.querySelector(
  "div.country_info_display div.left h1.time"
);
const h1_fahrenheit = document.querySelector(
  "div.country_info_display .right h1#fahrenheit"
);
const h1_celsius = document.querySelector(
  "div.country_info_display .right h1#celsius"
);
const h1_humid = document.querySelector(
  "div.country_info_display .right h1.humid"
);
/**
 * @type {HTMLImageElement}
 */
const img_loading = document.querySelector(".loading");
/**
 * @type {HTMLDivElement}
 */
const div_loader = document.querySelector(".loader");

img_loading.src = loading_image;

button_search.addEventListener("click", () => {
  assign_data_to_ui();
});

let assign_data_to_ui = () => {
  //show loader
  div_loader.style.display = "flex";
  get_weather(input_city_name.value).then((response) => {
    div_loader.style.display = "none";
    //hiding loader
    heading1_country.textContent = `Country: ${response.location.country}`;
    // heading1_name.textContent = `Name: ${response.location.name}`;
    heading1_region.textContent = `Region: ${response.location.region}`;
    heading1_time.textContent = `Local Time: ${response.location.localtime}`;
    h1_celsius.innerHTML = `Celsius: ${response.current.temp_c} &deg;`;
    h1_fahrenheit.innerHTML = `Fahrenheit: ${response.current.temp_f} &deg;`;
    h1_humid.textContent = `Humidity: ${response.current.humidity}`;
  });
};
