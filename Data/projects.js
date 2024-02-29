import { skills } from './skills.js';

export const projects = [
  // Empty Project Model
  // {
  //   imageSRC: '',
  //   name: '',
  //   type: '',
  //   description: '',
  //   skillArray: [],
  //   deployURL: '',
  //   codeURL: '',
  // },
  {
    imageSRC: './Assets/Projects/OmniSystem.png',
    name: 'OmniSystem [In Development]',
    type: 'Management System',
    description:
      "Discover OmniSystem: the ultimate business management solution. Effortlessly track sales, manage stock, and stay on top of product expiration dates. Empower your team with a unified platform for streamlined operations. Elevate efficiency and drive success with OmniSystem's versatile capabilities.",
    skillArray: [
      skills.reactjs,
      skills.tailwind,
      skills.shadcn,
      skills.apexcharts,
      skills.chartjs,
      skills.formik,
      skills.bootstrap,
      skills.nodejs,
      skills.express,
      skills.passport,
      skills.mongodb,
      skills.python,
      skills.selenium,
    ],
    deployURL: '#',
    codeURL: '#',
  },
  {
    imageSRC: './Assets/Projects/AmazonProductScraper.png',
    name: 'Amazon Product Scraper',
    type: 'Web Scraper',
    description:
      "The Amazon Product Scraper, designed as a job challenge, swiftly extracts data from Amazon's initial search page via Puppeteer. Featuring a user-friendly input and search button, users access dynamically presented product information, simplifying data gathering for informed decisions.",
    skillArray: [
      skills.html,
      skills.css,
      skills.javascript,
      skills.nodejs,
      skills.express,
      skills.puppeteer,
      skills.render,
    ],
    deployURL: 'https://amazonscrapped.vercel.app/',
    codeURL: 'https://github.com/GustavoGFG/amazonProductScrapper',
  },
  {
    imageSRC: './Assets/Projects/OnClick.png',
    name: 'OnClick',
    type: 'E-Commerce',
    description:
      'Welcome to OnClick, your ultimate online shopping destination! Explore a curated selection of products across various categories, effortlessly favorite your must-haves, and enjoy the convenience of secure sign-up and login features for a personalized shopping experience.',
    skillArray: [
      skills.html,
      skills.css,
      skills.javascript,
      skills.bootstrap,
      skills.nodejs,
      skills.express,
      skills.passport,
      skills.stripe,
      skills.mongodb,
    ],
    deployURL: 'https://onclickstore.vercel.app/',
    codeURL: 'https://github.com/GustavoGFG/onClick',
  },
  {
    imageSRC: './Assets/Projects/HashtagList.png',
    name: 'Hashtag List',
    type: 'CRUD',
    description:
      'Hashtag List is a streamlined web app for managing shopping lists. Built as a job challenge, it demonstrates efficient CRUD operations and user authentication using Bubble. With a clean interface, users can easily add, view, update, and delete items, ensuring smooth shopping list management.',
    skillArray: [skills.bubble],
    deployURL: 'https://lista-hashtag.bubbleapps.io/version-test/',
    codeURL: 'https://bubble.io/page?name=index&id=lista-hashtag&tab=tabs-1',
  },
  {
    imageSRC: './Assets/Projects/Starbucks.png',
    name: 'Clone Starbucks',
    type: 'Website Clone',
    description:
      'This project is a clone of the Starbucks Brasil Website. The goal of the project was to learn and improve my HTML, CSS and JavaScript skills along with the responsive part of the project as well.',
    skillArray: [skills.html, skills.css, skills.javascript],
    deployURL: 'https://gustavogfg.github.io/starbucksClone/',
    codeURL: 'https://github.com/GustavoGFG/starbucksClone',
  },
];
