function create_element(type, class_name,  text_content='', parent_element) {
    const created_element = document.createElement(type);
    created_element.className = class_name;
    if (text_content)
        created_element.textContent = text_content;
    
    parent_element.appendChild(created_element);
    
    return created_element;
}

import { HomeContents } from "./home_content";
import { MenuContents } from "./menu_contents";

function toggle_pages(page_to_show) {
    console.log("entered again");

    HomeContents.hide_content();
    MenuContents.hide_content();

    page_to_show.className = "show_content";
}

export {create_element, toggle_pages};
