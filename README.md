1.  STEPS TO SETUP AND RUN THE APPLICATION
    --> npm install
    --> npm run start

2.  We can setup two kind of side navigation bars which in the project is called as "MODE 1" and "MODE 2".
3.  Configaration to setup the side navigation bar is present at file "NavBarConstants.js".
4.  The file NavBarConstants.js has two named exports "SideNavBarItems" and "NAVBAR_MODE".
    --> SideNavBarItems contains array of navbar item configuration and NAVBAR_MODE will indicate the mode(either 1 or 2).
    --> Navbar item configuration has the below structure
    {
    img: "image",
    alt: "alt-text-to-image",
    title: "title of the navigation item",
    subItems: "array of nested navigation items if we have nested nav items, these nav items has same structure and can be nested upto any level."
    }

    --> Add your images to src/styles/images and import it into to NavBarConstants.js

ALL YOU NEED TO DO IS JUST CONFIGURE THE "NavBarConstants.js" file and project just works out of the box;