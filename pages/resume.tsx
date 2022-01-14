import { motion } from 'framer-motion';
import data from '../adapters/skillData';
import variants from '../animation/inUp';
import routeAnimation from '../animation/routeAnimation';
import Bar from '../components/Bar';

const resume = () => (
  <motion.div
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-6 py-2 text-gray-600"
  >
    {/* //? education & skills */}
    <div className="grid gap-6 md:grid-cols-2">
      {data.skills.map((skill: any) => (
        <motion.div key={skill.id} variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold text-purple-300">{skill.heading}</h5>
          <div className="font-medium dark:text-gray-200">
            <h5 className="my-2 text-xl font-bold">{skill.subHeading}</h5>
            <p className="font-semibold">{skill.title}</p>
            <p className="my-3">{skill.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
    {/* //? programming languages & tools */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold text-purple-300">Languages & Frameworks</h5>
        <div className="my-2">
          {data.languages.map((language) => (
            <Bar key={language.id} value={language} />
          ))}
        </div>
      </div>

      <div>
        <h5 className="my-3 text-2xl font-bold text-purple-300">Tools & Softwares</h5>
        <div className="my-2">
          {data.tools.map((tool) => (
            <Bar key={tool.id} value={tool} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default resume;
