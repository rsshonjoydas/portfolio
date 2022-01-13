import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { ISkill } from '../interface/skillType';

const Bar: FunctionComponent<{ value: ISkill }> = ({ value: { Icon, level, name } }) => {
  const barWidth = `${level}%`;

  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-100 dark:text-white rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full gradient-light"
        style={{ width: barWidth }}
      >
        <FontAwesomeIcon icon={Icon} className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
