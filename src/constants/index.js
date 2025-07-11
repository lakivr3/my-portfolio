import {
  mobile,
  backend,
  creator,
  web,
  restoraunt,
  bank,
  rick,
  weather,
  netflix,
  mycubeimg,
  typescript,
  tailwind,
  three,
  next,
  nodejs,
  git,
  mongodb,
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
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "JavaScript",
    icon: backend,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React.js",
    icon: creator,
  },
  {
    title: "Next.js",
    icon: next,
  },
  {
    title: "React Native",
    icon: creator,
  },
  {
    title: "Three.js",
    icon: three,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Git",
    icon: git,
  },
];
const reactnative = [
  {
    name: "Meals - React Native App",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      { name: "auth", color: "orange-text-gradient" },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    video: "Meals_pkm4vd.mp4",
    source_code_link: "https://github.com/lakivr3/MealsReactNative",
  },
  {
    name: "Bookworm",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      { name: "auth", color: "orange-text-gradient" },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    video: "Bookworm.mp4",
    source_code_link: "https://github.com/lakivr3/bookworm-react-native",
  },
  {
    name: "X&O Mobile Game",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    video: "IksOks.mp4",
    source_code_link: "https://github.com/lakivr3/XO",
  },
  {
    name: "Chain4 - Mobile Game",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      { name: "ai", color: "red-text-gradient" },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "lootie",
        color: "orange-text-gradient",
      },
    ],
    video: "chain4.mp4",
    source_code_link: "https://github.com/lakivr3/chain4",
  },
];

const projects = [
  {
    name: "MyCube - ECommerce",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },

      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "next-auth",
        color: "blue-text-gradient",
      },
    ],
    video: "MyCubePreview_vsuirx.mp4",
    link: "https://mycube-ecommerce.vercel.app/",
    image: mycubeimg,
    source_code_link: "https://github.com/lakivr3/mycubeV2",
  },
  {
    name: "Slack Clone",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "blue-text-gradient",
      },

      {
        name: "zustand",
        color: "pink-text-gradient",
      },
      {
        name: "auth",
        color: "orange-text-gradient",
      },
    ],
    video: "Slack-clone.mp4",
    source_code_link: "https://github.com/lakivr3/slack-clone",
  },
  {
    name: "Chat App",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },

      {
        name: "zustand",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "auth",
        color: "orange-text-gradient",
      },
    ],
    video: "chat-app.mp4",
    source_code_link: "https://github.com/lakivr3/chat-app-fe",
  },
  {
    name: "Issue Tracker",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },

      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "auth",
        color: "orange-text-gradient",
      },
    ],
    video: "issue-tracker.mp4",
    source_code_link: "https://github.com/lakivr3/issue-tracker",
  },

  {
    name: "Termosol",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
      {
        name: "google-maps",
        color: "pink-text-gradient",
      },
    ],
    video: "termosol.mp4",
    link: "https://www.termosol-ama.com/",
    source_code_link: "https://github.com/lakivr3/termosol",
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
    video: "Netflix_kv7czk.mp4",
    link: "https://netflix-clone-tado.vercel.app",
    image: netflix,
    source_code_link: "https://github.com/lakivr3/netflix-clone",
  },
  {
    name: "Rick & Morty App",

    tags: [
      {
        name: "nextjs",
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
      {
        name: "tanstack",
        color: "orange-text-gradient",
      },
    ],
    image: rick,
    video: "Rick_algyld.mp4",
    link: "https://rick-morty-next-six.vercel.app",
    source_code_link: "https://github.com/lakivr3/rick-morty-next",
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
    video: "Restourant_a0vnwl.mp4",
    image: restoraunt,
    source_code_link: "https://github.com/lakivr3/restoraunt",
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
    video: "Weather_inyjbw",
    image: weather,
    source_code_link: "https://github.com/lakivr3/weather",
  },
];

export { services, projects, reactnative };
