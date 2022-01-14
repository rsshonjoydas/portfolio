import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import projectData from '../adapters/projectData';
import inUp from '../animation/inUp';
import routeAnimation from '../animation/routeAnimation';
import stagger from '../animation/stagger';
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { Category } from '../interface/projectType';

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectData);
      setActive(category);
      return;
    }

    const newArray = projectData.filter((project) => project.category.includes(category));
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-auto scroll-smooth hover:scroll-auto"
      style={{ height: '65vh' }}
    >
      <Head>
        <title>RS Shonjoy | Projects</title>
      </Head>
      <ProjectNavbar handleFilterCategory={handleFilterCategory} active={active} />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 relative"
      >
        {projects.map((project) => (
          <motion.div
            variants={inUp}
            key={project.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-500"
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
