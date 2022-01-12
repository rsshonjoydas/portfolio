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
      <span className="hover:text-green cursor-pointer" onClick={() => setActiveItem(name)}>
        {name}
      </span>
    </Link>
  ) : null;

export default NavItem;
