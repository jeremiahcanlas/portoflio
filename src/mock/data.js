import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremiah Canlas', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
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
    'Greetings! My name is Jeremiah, I am a self-taught front end web developer from Forest City in Canada 🇨🇦',
  paragraphTwo:
    "I am a highly motivated developer with a burning passion for learning & creativity. In my days off, I am an active participant in outdoor adventures, like hiking. While every hike is unique and varies in difficulty, it must be finished. This enables me to approach my work's overall structure and design with the same mindset and intensity.",
  paragraphThree:
    'I specialize in front end development with a solid foundation in back end. I solve complex problems with eleganlty simple solutions.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'exp.png',
    title: 'Experience Rally',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hcw.png',
    title: 'Homecare On Wheels',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gie.png',
    title: 'Golden Image Esthetics',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
