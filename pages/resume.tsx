import data from '../adapters/skillData';
import Bar from '../components/Bar';

const resume = () => (
  <div className="px-6 py-2 text-gray-600">
    {/* //? education & skills */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
          <p className="font-semibold">Academy of Technology(2017-2021)</p>
          <p className="my-3">
            I am currently pursuing B.tech in Computer Science Engineering from Academy of
            Technology
          </p>
        </div>
      </div>

      <div>
        <h5 className="my-3 text-2xl font-bold">Experience</h5>
        <div className="">
          <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
          <p className="font-semibold">Tata Consultancy Services</p>
          <p className="my-3">I don&rsquo;t know why I am doing this job</p>
        </div>
      </div>
    </div>
    {/* //? programming languages & tools */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
        <div className="my-2">
          {data.languages.map((language) => (
            <Bar key={language.id} value={language} />
          ))}
        </div>
      </div>

      <div>
        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div className="my-2">
          {data.tools.map((tool) => (
            <Bar key={tool.id} value={tool} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default resume;
