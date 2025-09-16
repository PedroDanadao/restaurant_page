import "./style.css";

import { create_element } from "./contents/shared_functions";
import { HomeContents } from "./contents/home_content";
import { MenuContents } from "./contents/menu_contents";
import { AboutContents } from "./contents/about_contents";

console.log("Ok");

export const content_element = document.querySelector("#content")

import logo_image from "./images/logo_icon.png";

const logo_container = create_element("span", "logo_container", '', content_element)

const logo_image_element = document.createElement("img");
logo_image_element.src = logo_image;
logo_container.appendChild(logo_image_element);
logo_image_element.className = "logo_image";
const span_logo_name_element = create_element("span", "logo_name", "Denny's Burgers", logo_container);

const home_contents = new HomeContents();
const menu_contents = new MenuContents();
const about_contents = new AboutContents();

// content_element.appendChild(home_container);

// webserve command
// npx webpack serve
