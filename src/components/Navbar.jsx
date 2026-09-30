import { NavLink } from 'react-router';

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>
        Home
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>
        Blog
      </NavLink>
      <NavLink to="/voting" className={({ isActive }) => isActive ? 'navbar-link navbar-link-active' : 'navbar-link'}>
        Voting
      </NavLink>
    </div>
  );
}

export default Navbar;
