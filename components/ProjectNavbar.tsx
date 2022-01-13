import { FunctionComponent } from 'react';
import ProjectNavbarItem from './ProjectNavbarItem';

const ProjectNavbar: FunctionComponent<{ handleFilterCategory: Function; active: string }> = (
  props
) => (
  <div className="px-3 py-2 space-x-3 list-none flex overflow-auto scroll-smooth hover:scroll-auto">
    <ProjectNavbarItem value="all" {...props} />
    <ProjectNavbarItem value="react" {...props} />
    <ProjectNavbarItem value="next" {...props} />
    <ProjectNavbarItem value="express" {...props} />
    <ProjectNavbarItem value="mongo" {...props} />
  </div>
);

export default ProjectNavbar;
