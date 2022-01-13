import servicesData from '../adapters/servicesData';
import ServiceCard from '../components/ServiceCard';

const Home = () => (
  <div className="flex flex-col px-6 pt-1 text-gray-600 dark:bg-gray-600 dark:text-gray-200 flex-grow">
    <h5 className="my-3 font-medium">
      I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy
      of Technology. I have 3+ years of experience in Web Development and I have a Youtube Channel
      where I teach Full Stack Web Development
    </h5>
    <div
      className="p-4 dark:bg-gray-600  flex-grow"
      style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
    >
      <h6 className="my-3 text-xl font-bold tracking-wide text-purple-300">What I Offer</h6>
      <div className="grid grid-6 gap-6 md:grid-cols-2">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="p-2 bg-gray-200  dark:bg-dark-100 rounded-lg col-span-2 md:col-span-1 shadow-light-shadow dark:shadow-dark-shadow"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
