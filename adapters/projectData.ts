import { IProject } from '../interface/projectType';

const projectsData: IProject[] = [
  {
    id: 0,
    name: 'COVID Tracker',
    description: 'This app shows a statistical view about corona virus over the world',
    imageURL: '/images/covid.jpg',
    deployedURL: 'https://covid-19-tracker-by-sumit.web.app/',
    gitHubURL: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['react'],
    keyTechs: ['React', 'Chart.js', 'Material UI'],
  },
  {
    id: 7,
    name: 'Algorithm Visualizer',
    imageURL: '/images/algoVisual.png',
    deployedURL: 'https://visual-algorithm.web.app/',
    gitHubURL: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['react'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    keyTechs: ['React', 'firebase', 'Framer Motion'],
  },

  {
    id: 1,
    name: 'Dev Talks',
    imageURL: '/images/dev.jpg',
    deployedURL: 'https://dev-talks.herokuapp.com/',
    gitHubURL: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['express', 'mongo', 'react'],
    description: 'Social Media app for developers who can share project,create posts,etc...',
    keyTechs: ['React', 'Redux', 'Node', 'Express', 'Mongo', 'REST API', 'Bootstrap'],
  },

  {
    id: 2,
    name: 'Realtime Chat App',
    imageURL: '/images/chatapp.jpg',
    deployedURL: 'https://sumit-chat.netlify.app/',
    gitHubURL: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['express', 'react'],
    description: 'Basic Realtime Chat App where one can create a room can talk to each other',
    keyTechs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    id: 3,
    name: 'Tweeter Clone',
    imageURL: '/images/tweetme.jpg',
    deployedURL: 'http://sumaxtweetme.pythonanywhere.com/',
    gitHubURL: 'https://github.com/Dey-Sumit/tweetme',
    category: ['next', 'react'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    keyTechs: ['React', 'Next', 'Node REST API'],
  },
  {
    id: 4,
    name: 'Dev Portfolio',
    imageURL: '/images/portfolio.jpg',
    deployedURL: 'http://suprateem.herokuapp.com/',
    category: ['next'],
    gitHubURL: 'https://github.com/Dey-Sumit/tweetme',
    description: 'Hey, You are seeing this project now...Enjoy',
    keyTechs: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
  },

  {
    id: 5,
    name: 'Color Classification using tf.js',
    imageURL: '/images/color.jpg',
    deployedURL: '!#',
    gitHubURL: 'https://github.com/Dey-Sumit/color-classification',
    category: ['express', 'next'],
    description: 'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    keyTechs: ['Express', 'TensorFlow.js', 'Vanilla js'],
  },
  {
    id: 6,
    name: 'YouTube using YouTube ',
    imageURL: '/images/youtubeClone.png',
    deployedURL: 'https://not-utube.web.app/',
    gitHubURL: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['express', 'next'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    keyTechs: ['React', 'Redux', 'Firebase Auth', 'YouTube API', 'Sass', 'Bootstrap'],
  },
  {
    id: 9,
    name: 'Football App',
    imageURL: '/images/football.png',
    deployedURL: 'https://o-my-goal.web.app/',
    gitHubURL: 'https://github.com/Dey-Sumit/football-app',
    category: ['react'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    keyTechs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
];

export default projectsData;
