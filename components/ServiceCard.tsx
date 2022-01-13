import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { IService } from '../interface/serviceType';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    };
  }
  return (
    <div className="p-2 flex items-center space-x-4 dark:bg-dark-100">
      <FontAwesomeIcon icon={Icon} className="w-12 h-12 text-purple-400" />
      <div className="text-gray-500 dark:text-gray-200 ">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
