import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) =>
  activeItem !== name ? (
    <Link href={route}>
      <span
        className="hover:text-purple-400 hover:border-b-4 hover:border-purple-400 cursor-pointer"
        style={{ marginBottom: '0.5rem' }}
        onClick={() => setActiveItem(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;

export default NavItem;
