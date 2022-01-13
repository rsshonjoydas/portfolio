import projectData from '../adapters/projectData';
import ProjectCard from '../components/ProjectCard';

const projects = () => (
  <div
    className="px-5 py-2 overflow-auto scroll-smooth hover:scroll-auto"
    style={{ height: '65vh' }}
  >
    <nav>Navbar</nav>

    <div className="grid grid-cols-12 gap-4 my-3 relative">
      {projectData.map((project) => (
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

export default projects;
