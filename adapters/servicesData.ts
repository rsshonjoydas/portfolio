import {
  faCode,
  faDatabase,
  faDesktop,
  faLaptopCode,
  faPaintBrush,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { IService } from '../interface/serviceType';

const services: IService[] = [
  {
    id: 1,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
    Icon: faLaptopCode,
  },
  {
    id: 2,
    title: 'Backend  Development',
    about: 'handle database, server, api using <b>Express </b> & other popular frameworks',
    Icon: faServer,
  },
  {
    id: 3,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
    Icon: faDatabase,
  },
  {
    id: 4,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
    Icon: faCode,
  },
  {
    id: 5,
    title: 'UI/UX designer',
    about: 'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
    Icon: faPaintBrush,
  },
  {
    id: 6,
    Icon: faDesktop,
    title: 'Whatever',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
];

export default services;
