import ALERT  from "../src/styles/images/alert.svg";
import AUDIO from "../src/styles/images/audio.svg";
import CURRENCY from "../src/styles/images/currency.svg";
import DOLLAR from "../src/styles/images/dollar.svg";
import HOME from "../src/styles/images/home.svg";
import ID_CARD from "../src/styles/images/id-card.svg";
import LAPTOP from "../src/styles/images/laptop.svg";
import MAIL from "../src/styles/images/mail.svg";
import MEDIA from "../src/styles/images/media.svg";
import MESSAGES from "../src/styles/images/message.svg";
import NOTIFICATION from "../src/styles/images/notification.svg";
import PAYMENT_METHOD from "../src/styles/images/payment-method.svg";
import REMINDER from "../src/styles/images/reminder.svg";
import VIDEO from "../src/styles/images/video.svg";

export const SideNavBarItems = [
  {
    img: HOME,
    alt: "",
    title: "Home",
    subItems: [
      {
        img: REMINDER,
        alt: "sidebar",
        title: "Reminders",
        subItems: [
          {
            path: "/notification",
            img: NOTIFICATION,
            alt: "sidebar",
            title: "Notification",
          },
          {
            path: "/alerts",
            img: ALERT,
            alt: "sidebar",
            title: "Alert",
          },          
        ],
      },
      {
        path: "/idCard",
        img: ID_CARD,
        alt: "sidebar",
        title: "ID CARD",
      },
    ],
  },
  {
    img: DOLLAR,
    alt: "sidebar",
    title: "Payments",
    subItems: [
      {
        path: "/payments",
        img: PAYMENT_METHOD,
        alt: "sidebar",
        title: "Payment methods",
      },
      {
        path: "/currency",
        img: CURRENCY,
        alt: "sidebar",
        title: "Currency",
      },
    ],
  },
  {
    img: MESSAGES,
    alt: "sidebar",
    title: "Messages",
    subItems: [
      {
        path: "/mail",
        img: MAIL,
        alt: "sidebar",
        title: "MAIL",
      },
      {
        path: "/laptops",
        img: LAPTOP,
        alt: "sidebar",
        title: "Laptop models",
      },
    ],
  },
  {
    img: MEDIA,
    alt: "sidebar",
    title: "Media",
    subItems: [
      {
        path: "/video",
        img: VIDEO,
        alt: "sidebar",
        title: "Video",
      },
      {
        path: "/audio",
        img: AUDIO,
        alt: "sidebar",
        title: "Audio",
      },
    ],
  },
];

export const NAVBAR_MODE = 1; //1,2
