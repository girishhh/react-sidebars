import IPHONE from "../src/styles/images/iphone.png";
import APPLE from "../src/styles/images/apple-icon.png";

export const SideNavBarItems = [
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "Home",
    subItems: [
      {
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test1",
        subItems: [
          {
            path: "/",
            img: APPLE,
            alt: "sidebar.dashboardAltText",
            title: "dashboard",
          },
          {
            path: "/test3",
            img: IPHONE,
            alt: "sidebar.dashboardAltText",
            title: "Test3",
          },
        ],
      },
      {
        path: "/test4",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test4",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "Notification",
    subItems: [
      {
        path: "/test5",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test5",
      },
      {
        path: "/test6",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test6",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "test6",
    subItems: [
      {
        path: "/test7",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test7",
      },
      {
        path: "/test8",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test8",
      },
    ],
  },
  {
    img: IPHONE,
    alt: "sidebar.dashboardAltText",
    title: "posts",
    subItems: [
      {
        path: "/test9",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test9",
      },
      {
        path: "/test10",
        img: IPHONE,
        alt: "sidebar.dashboardAltText",
        title: "Test10",
      },
    ],
  },
];

export const NAVBAR_MODE = 1; //1,2
