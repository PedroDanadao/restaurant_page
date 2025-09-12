import {create_element, toggle_pages} from "./shared_functions";
// import {content_element} from "../index"

const content_element = document.querySelector("#content");
const home_button = document.querySelector(".home_button");

class HomeContents {
    static home_container;
    h1_headline_element;
    client_quote;
    client_name;
    hours_header;
    days_of_the_week;
    location_header;
    location_text_element;

    constructor() {
        home_button.addEventListener("click", this.show_content)

        HomeContents.home_container = create_element("div", "show_content", '', content_element)
        this.h1_headline_element = create_element("h1", "headline", "Denny's Burgers: Crafted for Cravings.", HomeContents.home_container);
        this.headline_closing_phrase = create_element("p", "headline_closing_phrase", "- Unforgettable flavor in every bite.", HomeContents.home_container);

        this.client_quote = create_element("p", "client_quote", "Denny's Burger is the kind of place where every bite feels like a warm hug on a cold day. Their burgers are legendary, stacked high with fresh ingredients and bursting with flavor. And the fries? Don't even get me started! Crispy, salty perfection that perfectly complements the juicy burger. It's more than just a meal; it's an experience that keeps you coming back for more.", HomeContents.home_container);
        this.client_name = create_element("p", "client_name", "- A very satisfied customer", HomeContents.home_container);
        
        this.hours_header = create_element("h2", "hours_header", "Hours", HomeContents.home_container);
        this.hours_list = create_element("ul", "hours_list", '', HomeContents.home_container);
        this.days_of_the_week = [
            {"day": "Sunday", "hours": "8:00 - 20:00"},
            {"day": "Monday", "hours": "7:00 - 18:00"},
            {"day": "Tuesday", "hours": "7:00 - 18:00"},
            {"day": "Wednesday", "hours": "7:00 - 18:00"},
            {"day": "Thursday", "hours": "8:00 - 22:00"},
            {"day": "Friday", "hours": "8:00 - 22:00"},
            {"day": "Saturday", "hours": "8:00 - 22:00"},
        ]

        for (let day_object of this.days_of_the_week) {
            create_element("li", '', `${day_object["day"]}: ${day_object["hours"]}`, this.hours_list);
        }

        this.location_header = create_element("h2", "location_header", "Location", HomeContents.home_container);
        this.location_text_element = create_element("p", "location_text", "123 Fictional Street, City, State", HomeContents.home_container)
    }

    show_content() {
        toggle_pages(HomeContents.home_container)
    }
    static hide_content() {
        HomeContents.home_container.className = "hide_content";
    }

}

export {HomeContents}
