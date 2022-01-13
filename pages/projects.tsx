import { useState } from 'react';
import projectData from '../adapters/projectData';
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { Category } from '../interface/projectType';

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState('all');

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
    <div
      className="px-5 py-2 overflow-auto scroll-smooth hover:scroll-auto"
      style={{ height: '65vh' }}
    >
      <ProjectNavbar handleFilterCategory={handleFilterCategory} active={active} />

      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-500"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
