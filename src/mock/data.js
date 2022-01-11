import { nanoid } from 'nanoid';
import Resume from '../files/Resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Jeremiah Canlas',
  lang: 'en',
  description:
    'Hello, My name is Jeremiah Canlas, a front-end web developer from Canada. Welcome to my personal portfolio, where you can browse all my projects.',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jeremiah Canlas',
  subtitle: '', // not in use
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Hello! My name is Jeremiah, I am a self-taught front end web developer from Canada 🇨🇦',
  paragraphTwo:
    "I am a highly motivated developer with a burning passion for learning & creativity. In my days off, I enjoy long and gruelling hikes. While every hiking trail is unique and varies in difficulty, it must be finished. This allows me to approach all my work's overall structure and design with the same mindset and intensity.",
  paragraphThree:
    'I specialize in front end development with a solid foundation in back end. I solve complex problems with eleganlty simple solutions.',
  resume: `${Resume}`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rally.png',
    title: 'Experience Rally',
    info: 'A subscription based website that offers three subscription services for live rally races. It contains a hero page along with additional information, subscription package page and a checkout page.',
    info2: 'HTML5, Javascript, React, Sass, Framer Motion, React Reveal, React Responsive.',
    url: 'https://experience-rally.netlify.app',
    repo: 'https://github.com/jeremiahcanlas/experience', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hp.png',
    title: 'Homepage',
    info: 'A custom homepage with a dynamic background, random quote generator, current weather, personalized greeting, current time & date. The data comes from openweather API and random quote generator API.',
    info2: 'HTML5, Javascript, React, Gatsby, GraphQL, Sass, Axios, Framer Motion.',
    url: 'https://jc-homepage.netlify.app',
    repo: 'https://github.com/jeremiahcanlas/homepage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mp.png',
    title: 'Personal Portfolio',
    info: 'My very own personal portfolio that highlights all my projects and expresses my individuality as a developer.',
    info2: 'HTML5, Javascript, React, Gatsby, GraphQL, Sass, React Bootstrap, React Reveal.',
    url: '',
    repo: 'https://github.com/jeremiahcanlas/portoflio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hcw.png',
    title: 'Homecare On Wheels',
    info: 'A website for Homecare On Wheels a local health care organization providing various care services in London and Chatham, Ontario.',
    info2: 'HTML, Javascript, Sass, jQuery.',
    url: 'https://www.homecareonwheels.ca/',
    repo: 'https://github.com/jeremiahcanlas/HCW.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gie.png',
    title: 'Golden Image Esthetics',
    info: 'The first static website that I developed for a small business as a self-taught developer. Golden Image Esthetics specializes in esthetics and other beauty services.',
    info2: 'HTML, Javascript, Sass, jQuery.',
    url: 'https://www.goldenimageesthetics.ca',
    repo: 'https://github.com/jeremiahcanlas/GIE.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'How do you like your coffee?',
  btn: "Let's Chat",
  email: 'info@jeremiahcanlas.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremiahcanlas/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeremiahcanlas',
    },
  ],
};
