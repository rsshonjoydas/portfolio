import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IService {
  id: number;
  title: string;
  about: string;
  Icon: IconDefinition;
}
