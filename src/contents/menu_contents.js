import {create_element, toggle_pages} from "./shared_functions";
// import {content_element} from "../index"

const content_element = document.querySelector("#content");
const menu_button = document.querySelector(".menu_button");

import traditional_burger_img from "../images/menu_1_traditional.png";
import chicken_burger_img from "../images/menu_2_chicken.png";
import steak_img from "../images/menu_3_steak_jalapeno.png";
import ogre_img from "../images/menu_4_ogre.png";
import hawaian_img from "../images/menu_5_hawaian.png";
import vegan_img from "../images/menu_6_vegan.png"

const images_dict = {
    "traditional": traditional_burger_img,
    "chicken": chicken_burger_img,
    "steak": steak_img,
    "ogre": ogre_img,
    "hawaian": hawaian_img,
    "vegan": vegan_img
}


class MenuContents {
    static menu_container;
    h1_menu_title;

    constructor() {
        menu_button.addEventListener("click", this.show_content)

        MenuContents.menu_container = create_element("div", "hide_content", '', content_element);

        this.h1_menu_title = create_element("h1", "menu_title", "Menu", MenuContents.menu_container);

        this.add_menu_item("traditional", "Traditional burger", 5, "traditional");
        this.add_menu_item("chicken", "Chicken burger", 4, "chicken");
        this.add_menu_item("steak jalapeño", "Steak Jalapeño", 7, "steak");
        this.add_menu_item("ogre", "Ogre burger", 12, "ogre");
        this.add_menu_item("hawaian", "Hawaian burger", 6, "hawaian");
        this.add_menu_item("Vegan", "Vegan burger", 3, "vegan");
    }

    add_menu_item(title, description, price, image_key) {
        const menu_item_div = create_element("div", "menu_item_container", '', MenuContents.menu_container);
        
        const title_h3 = create_element("h2", "item_title", title, menu_item_div);
        const description_paragraph = create_element("p", "item_description", description, menu_item_div);
        const price_element = create_element("b", "item_price", `$${price}`, menu_item_div);
        
        const image_element = create_element("img", "item_image", '', menu_item_div);
        image_element.src = images_dict[image_key];
        image_element.width = 250;
    }

    show_content() {
        toggle_pages(MenuContents.menu_container)
    }
    static hide_content() {
        MenuContents.menu_container.className = "hide_content";
    }
}

export {MenuContents}
