import {
  faDocker,
  faFigma,
  faJs,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faImages, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { ISkill } from '../interface/skillType';

const skills = [
  {
    id: 1,
    heading: 'Education',
    sebHeading: 'Computer Science Engineering',
    title: 'Academy of Technology (2017-2021)',
    description:
      'I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology',
  },
  {
    id: 2,
    heading: 'Experience',
    sebHeading: 'Software Developer Jr.',
    title: 'RS Software',
    description: "I don't know why I am doing this job",
  },
];

const languages: ISkill[] = [
  {
    id: 1,
    Icon: faJs,
    name: 'JavaScript',
    level: 90,
  },
  {
    id: 2,
    Icon: faReact,
    name: 'React',
    level: 80,
  },
  {
    id: 3,
    Icon: faNode,
    name: 'NodeJS',
    level: 70,
  },
  {
    id: 4,
    Icon: faDatabase,
    name: 'MongoDB',
    level: 85,
  },
  {
    id: 5,
    Icon: faDocker,
    name: 'Docker',
    level: 80,
  },
  {
    id: 6,
    Icon: faPython,
    name: 'Python',
    level: 45,
  },
];

export const tools: ISkill[] = [
  {
    id: 1,
    Icon: faFigma,
    name: 'Figma',
    level: 85,
  },
  {
    id: 2,
    Icon: faImages,
    name: 'PhotoShop',
    level: 45,
  },
  {
    id: 3,
    Icon: faCode,
    name: 'VS Code',
    level: 90,
  },
  {
    id: 4,
    Icon: faTerminal,
    name: 'Vim',
    level: 85,
  },
];

export default { skills, languages, tools };
