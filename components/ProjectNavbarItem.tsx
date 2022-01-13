import { FunctionComponent } from 'react';
import { Category } from '../interface/projectType';

const ProjectNavbarItem: FunctionComponent<{
  value: Category | 'all';
  active: string;
  handleFilterCategory: Function;
}> = ({ value, active, handleFilterCategory }) => {
  let className =
    'capitalize text-indigo-400 font-bold flex space-x-5 hover:text-purple-400 cursor-pointer';
  if (active === value) className += ' text-blue-400';
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

export default ProjectNavbarItem;
