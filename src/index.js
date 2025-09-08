import "./style.css";

console.log("Ok");

const content_element = document.querySelector("#content")

const home_button = document.querySelector(".home_button");
home_button.addEventListener("click", hide_content);


function hide_content() {
    if (home_container.className == "show_content")
        home_container.className = "hide_content";
    else
        home_container.className = "show_content";
}

import logo_image from "./images/logo_icon.png";

function create_element(type, class_name, text_content='', parent_element=null) {
    const created_element = document.createElement(type);
    created_element.className = class_name;
    if (text_content)
        created_element.textContent = text_content;
    
    if (!parent_element)
        parent_element = content_element
    parent_element.appendChild(created_element);
    
    return created_element;
}

const logo_image_element = document.createElement("img");
logo_image_element.src = logo_image;
content_element.appendChild(logo_image_element);
const span_logo_name_element = create_element("span", "logo_name", "Denny's Burgers");


const home_container = create_element("div", "show_content", '');
const h1_headline_element = create_element("h1", "headline", "Denny's Burgers: Crafted for Cravings.", home_container);

const headline_closing_phrase = create_element("p", "headline_closing_phrase", "- Unforgettable flavor in every bite.", home_container);

const client_quote = create_element("p", "client_quote", "Denny's Burger is the kind of place where every bite feels like a warm hug on a cold day. Their burgers are legendary, stacked high with fresh ingredients and bursting with flavor. And the fries? Don't even get me started! Crispy, salty perfection that perfectly complements the juicy burger. It's more than just a meal; it's an experience that keeps you coming back for more.", home_container);
const client_name = create_element("p", "client_name", "- A very satisfied customer", home_container);

const hours_header = create_element("h2", "hours_header", "Hours", home_container);
const hours_list = create_element("ul", "hours_list", '', home_container);
const days_of_the_week = [
    {"day": "Sunday", "hours": "8:00 - 20:00"},
    {"day": "Monday", "hours": "7:00 - 18:00"},
    {"day": "Tuesday", "hours": "7:00 - 18:00"},
    {"day": "Wednesday", "hours": "7:00 - 18:00"},
    {"day": "Thursday", "hours": "8:00 - 22:00"},
    {"day": "Friday", "hours": "8:00 - 22:00"},
    {"day": "Saturday", "hours": "8:00 - 22:00"},
]
for (let day_object of days_of_the_week) {
    create_element("li", '', `${day_object["day"]}: ${day_object["hours"]}`, hours_list);
}

const location_header = create_element("h2", "location_header", "Location", home_container);
const location_text_element = create_element("p", "location_text", "123 Fictional Street, City, State", home_container)

// create_element("li", '', "list item", hours_list);

// webserve command
// npx webpack serve
