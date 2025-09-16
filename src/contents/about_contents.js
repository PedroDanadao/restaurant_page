import { create_element, toggle_pages } from "./shared_functions";


const content_element = document.querySelector("#content");
const about_button = document.querySelector(".about_button");


class AboutContents {
    static about_container;
    h1_about_title;

    constructor() {
        about_button.addEventListener("click", this.show_content);
        
        AboutContents.about_container = create_element("div", "hide_content", '', content_element);

        this.h1_about_title = create_element("h1", "about_title", "Meet the team", AboutContents.about_container);

        this.add_staff("Jack", "Chef", "Proud to be on point");
        this.add_staff("Debbie", "Waitress", "Always welcome with a smile");
        this.add_staff("Dennis", "Owner", "Ready to end your hunger");
    }

    add_staff(name, description, catchphrase) {
        const staff_container = create_element("div", "staff_container", '', AboutContents.about_container);
        
        create_element("b", "staff_name", name, staff_container);
        create_element("p", "staff_description", description, staff_container);
        create_element("p", "staff_catchphrase", `- ${catchphrase}`, staff_container);
    }

    show_content() {
        toggle_pages(AboutContents.about_container);
    }
    static hide_content() {
        AboutContents.about_container.className = "hide_content";
    }
}

export{AboutContents}
