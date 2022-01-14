import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { ISkill } from '../interface/skillType';

const Bar: FunctionComponent<{ value: ISkill }> = ({ value: { Icon, level, name } }) => {
  const barWidth = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-100 dark:text-white rounded-full">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="px-4 py-1 flex items-center rounded-full gradient-light"
        style={{ width: barWidth }}
      >
        <FontAwesomeIcon icon={Icon} className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
