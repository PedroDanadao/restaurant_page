import "./style.css";

import { create_element } from "./contents/shared_functions";
import { HomeContents } from "./contents/home_content";
import { MenuContents } from "./contents/menu_contents";

console.log("Ok");

export const content_element = document.querySelector("#content")

import logo_image from "./images/logo_icon.png";

const logo_image_element = document.createElement("img");
logo_image_element.src = logo_image;
content_element.appendChild(logo_image_element);
const span_logo_name_element = create_element("span", "logo_name", "Denny's Burgers", content_element);

const home_contents = new HomeContents();
const menu_contents = new MenuContents();

// content_element.appendChild(home_container);

// webserve command
// npx webpack serve
