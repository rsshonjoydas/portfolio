import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dmgbtukr2/image/upload/v1642085457/avatar/rs_xedovq.jpg"
        alt="logo"
        height="120"
        width="120"
        quality="100"
        className="rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple-400">Shonjoy </span>Das
      </h3>
      <p className="px-2 py-2 my-3 text-gray-500 font-bold bg-gray-200 dark:bg-dark-100 dark:text-gray-200 rounded-full">
        Web Developer
      </p>
      <a
        href="/"
        className="px-2 py-2 my-3 text-gray-500 font-bold bg-gray-200 dark:bg-dark-100 dark:text-gray-200 rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faDownload} className="w-8 h-8 mr-2" />
        Download Resume
      </a>
      {/* //? social icons */}
      <div className="flex justify-around my-5 text-purple-400 mx-auto w-9/12 md:w-full">
        <a href="/">
          <FontAwesomeIcon
            icon={faYoutube}
            className="w-8 h-8 cursor-pointer text-xl hover:text-red-500"
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-8 h-8 cursor-pointer text-xl hover:text-gray-500"
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-8 h-8 cursor-pointer text-xl hover:text-blue-400"
          />
        </a>
      </div>
      {/* //? address */}
      <div
        className="py-4 my-5 text-gray-500 font-medium bg-gray-200 dark:bg-dark-100 dark:text-gray-200 ml-0"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faMapMarker} className="w-8 h-8" />
          <span>Dhaka, Bangladesh</span>
        </div>
        <p className="my-2">rsshonjoydas@gmail.com</p>
        <p className="my-2">+880 1311-401-701</p>
      </div>
      {/* //? email me */}
      <button
        type="button"
        className="gradient-light w-8/12 py-2 px-5 text-white my-2 rounded-full focus:outline-none"
        onClick={() => window.open('mailto:rsshonjoydas@gmail.com')}
      >
        Email Me
      </button>
      {/* //? toggle theme */}
      <button
        type="button"
        className="gradient-light w-8/12 py-2 px-5 text-white my-2 rounded-full"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
