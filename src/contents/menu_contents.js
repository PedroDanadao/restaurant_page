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
    menu_grid_container;

    constructor() {
        menu_button.addEventListener("click", this.show_content)

        MenuContents.menu_container = create_element("div", "hide_content", '', content_element);

        this.h1_menu_title = create_element("h1", "menu_title", "Menu", MenuContents.menu_container);
        
        this.menu_grid_container = create_element("div", "menu_grid_container", '', MenuContents.menu_container);

        this.add_menu_item("Traditional Burger",
            "Savor the timeless taste of our Traditional Burger. This classic features a perfectly grilled, juicy patty, crisp lettuce, and a ripe, red tomato slice, all nestled between two soft, toasted buns. Simple, satisfying, and utterly delicious – a true homage to the original burger experience.",
            5, "traditional");

        this.add_menu_item("Chicken Burger",
            "Experience a delightful twist with our Chicken Burger. Enjoy a golden-fried, crispy chicken fillet, fresh, crunchy lettuce, and a dollop of creamy mayonnaise, all served on a perfectly toasted bun. A lighter yet equally satisfying option that's bursting with flavor.",
            4, "chicken");

        this.add_menu_item("Steak Jalapeño Burger",
            "Ignite your taste buds with our fiery Steak Jalapeño! This bold creation features tender, seasoned steak, sautéed onions, melted cheese, and a generous kick of fresh jalapeño peppers, all piled high on a toasted bun. It's a flavor explosion that's sure to satisfy your craving for something spicy and substantial.",
            7, "steak");

        this.add_menu_item("Ogre Burger",
            "Unleash your hunger with the monstrous Ogre Burger! This colossal creation boasts three juicy beef patties, each layered with melted cheese, crisp lettuce, ripe tomatoes, red onions, and tangy pickles, all stacked sky-high on a sesame seed bun. It's an epic feast designed for the truly ravenous.",
            12, "ogre");

        this.add_menu_item("Hawaiian Burger",
            "Escape to a tropical paradise with our Hawaiian Burger! This unique blend of sweet and savory features a perfectly grilled beef patty, melted cheese, crispy bacon, and a delicious grilled pineapple ring, all served on a toasted sesame seed bun. It's a flavor vacation in every bite!",
            6, "hawaian");

        this.add_menu_item("Vegan Burger",
            "Discover a fresh and flavorful choice with our Vegan Burger! This delightful option features a savory plant-based patty, crisp lettuce, fresh tomato, and a hint of vegan mayo, all served on a toasted bun and topped with a single olive. It's a light, delicious, and guilt-free experience.",
            3, "vegan");
    }

    add_menu_item(title, description, price, image_key) {
        const menu_item_div = create_element("div", "menu_item_container", '', this.menu_grid_container);
        
        const title_h3 = create_element("h2", "item_title", title, menu_item_div);
        const description_paragraph = create_element("p", "item_description", description, menu_item_div);
        
        const image_and_price_container = create_element("div", "image_and_price_container", '', menu_item_div);

        const image_element = create_element("img", "item_image", '', image_and_price_container);
        image_element.src = images_dict[image_key];
        image_element.width = 250;
        
        const price_element = create_element("b", "item_price", `$${price},00`, image_and_price_container);
    }

    show_content() {
        toggle_pages(MenuContents.menu_container);
    }
    static hide_content() {
        MenuContents.menu_container.className = "hide_content";
    }
}

export {MenuContents}
