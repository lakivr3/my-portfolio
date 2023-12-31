import {
  mobile,
  backend,
  creator,
  web,
  restoraunt,
  bank,
  gpt,
  rick,
  weather,
  netflix,
  mycubeimg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML",
    icon: web,
  },
  {
    title: "CSS",
    icon: mobile,
  },
  {
    title: "JavaScript",
    icon: backend,
  },
  {
    title: "ReactJS",
    icon: creator,
  },
];

const projects = [
  {
    name: "MyCube - ECommerce",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },

      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    link: "https://mycube-ecommerce.vercel.app/",
    image: mycubeimg,
    source_code_link: "https://github.com/lakivr3/mycube-ecommerce",
  },
  {
    name: "Netflix Clone",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    link: "https://netflix-clone-tado.vercel.app",
    image: netflix,
    source_code_link: "https://github.com/lakivr3/netflix-clone",
  },
  {
    name: "Restoraunt App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    link: "https://restoraunt-tado.vercel.app",

    image: restoraunt,
    source_code_link: "https://github.com/lakivr3/restoraunt",
  },
  {
    name: "Bank App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    link: "https://bank-app-tado.vercel.app",

    image: bank,
    source_code_link: "https://github.com/lakivr3/bank-app",
  },

  {
    name: "Weather App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    link: "https://weather-lyart.vercel.app",

    image: weather,
    source_code_link: "https://github.com/lakivr3/weather",
  },
  {
    name: "Rick & Morty WiKi",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rick,
    source_code_link: "https://github.com/lakivr3/react-wiki",
  },
];

export { services, projects };
