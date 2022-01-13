import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const { route } = useRouter();

  useEffect(() => {
    if (route === '/') setActiveItem('About');
    if (route === '/projects') setActiveItem('Projects');
    if (route === '/resume') setActiveItem('Resume');
  }, []);

  return (
    <div className="flex justify-between px-5 py-5 my-3">
      <span className="font-bold text-xl border-b-4 border-purple-400 text-purple-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="font-lg text-indigo-400 font-bold flex space-x-5">
        {/* {activeItem !== 'About' && (
          <Link href="/about">
            <span onClick={() => setActiveItem('About')}>About</span>
          </Link>
        )}
        {activeItem !== 'Projects' && (
          <Link href="/projects">
            <span onClick={() => setActiveItem('Projects')}>Projects</span>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href="/resume">
            <span onClick={() => setActiveItem('Resume')}>Resume</span>
          </Link>
        )} */}
        {/* //? OR use NavItem Component with below code */}
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
