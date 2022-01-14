import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAsia, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import inUp from '../animation/inUp';
import stagger from '../animation/stagger';
import { IProject } from '../interface/projectType';

const ProjectCard: FunctionComponent<{ project: IProject }> = ({ project }) => {
  const { name, description, imageURL, deployedURL, gitHubURL, keyTechs } = project;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={imageURL}
        alt={name}
        width="400"
        height="200"
        layout="responsive"
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 top-0 left-0 z-10 h-auto w-full gap-x-12 absolute text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-dark-100"
        >
          <div>
            <motion.div variants={inUp}>
              <Image src={imageURL} alt={name} width="400" height="200" layout="responsive" />
            </motion.div>
            <motion.div variants={stagger} className="flex justify-center my-4 space-x-3">
              <motion.div variants={inUp}>
                <Link href={gitHubURL}>
                  <span className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-gray-500 cursor-pointer rounded">
                    <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
                  </span>
                </Link>
              </motion.div>
              <motion.div variants={inUp}>
                <Link href={deployedURL}>
                  <span className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-gray-500 cursor-pointer rounded">
                    <FontAwesomeIcon icon={faGlobeAsia} /> <span>Project</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={stagger} className="my-3">
            <motion.h2 variants={inUp} className="mb-3 text-xl font-medium md:text-2xl">
              {name}
            </motion.h2>
            <motion.h3 variants={inUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={inUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {keyTechs.map((tech) => (
                <span key={tech} className="px-2 py-1 my-1 bg-gray-200 dark:bg-gray-500 rounded">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            type="button"
            onClick={() => setShowDetail(false)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-gray-500"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
