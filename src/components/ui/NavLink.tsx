import React from 'react';
import type { NavLinkProps } from '../../types';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default NavLink;