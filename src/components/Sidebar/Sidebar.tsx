import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../../interfaces';

function Sidebar() {
  const navLinks: NavigationLink[] = [
    { label: 'Dashboards', to: '/dashboard' },
    { label: 'Apartments', to: '/apartments' },
    { label: 'Trades', to: '/trades' },
    { label: 'Site Explorer', to: '/site-explorer' },
    { label: 'Plans', to: '/plans' },
    { label: 'Reminders', to: '/reminders' },
    { label: 'Reports', to: '/reports' },
  ];

  return (
    <aside>
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
