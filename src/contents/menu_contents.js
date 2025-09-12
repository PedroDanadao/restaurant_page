import {create_element, toggle_pages} from "./shared_functions";
// import {content_element} from "../index"

const content_element = document.querySelector("#content");
const menu_button = document.querySelector(".menu_button");


class MenuContents {
    static menu_container;
    h1_menu_title;

    constructor() {
        menu_button.addEventListener("click", this.show_content)

        MenuContents.menu_container = create_element("div", "hide_content", '', content_element);

        this.h1_menu_title = create_element("h1", "hide_content", "Menu", MenuContents.menu_container);

        this.add_menu_item("traditional", "Traditional burger", 5, "../images/menu_1_traditional.png")
    }

    add_menu_item(title, description, price, image_path) {
        const menu_item_div = create_element("div", "menu_item_container", '', MenuContents.menu_container);
        
        const title_h3 = create_element("h3", "item_title", title, menu_item_div);
        const description_paragraph = create_element("p", "item_description", description, menu_item_div);
        const price_element = create_element("b", "item_price", `$${price}`, menu_item_div);
        
        const image_element = create_element("img", "item_image", '', menu_item_div);
    }

    show_content() {
        toggle_pages(MenuContents.menu_container)
    }
    static hide_content() {
        MenuContents.menu_container.className = "hide_content";
    }
}

export {MenuContents}
