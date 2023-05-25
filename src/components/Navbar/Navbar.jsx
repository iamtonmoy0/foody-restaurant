
import { Link } from 'react-router-dom';
import './Navbar.css'
import * as RoutePath from '../../routes/routes'

const Navbar = () => {
  


	return (
		<div className="navbar bg-base-200 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={RoutePath.DASHBOARD}>Home</Link></li>
       <li><Link to=''>Chef</Link></li>
        <li><Link to={RoutePath.BLOG}>Blog</Link></li>
      <li><Link to=''>Contact</Link></li>
      </ul>
    </div>
    <Link to={RoutePath.DASHBOARD} className="btn btn-ghost bg-transparent normal-case text-3xl headerStyle">F <span className="text-red-400">oo</span>dy</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li> <Link  to={RoutePath.DASHBOARD}>Home</Link>  </li>
       <li><Link to=''>Chef</Link></li>
        <li><Link to={RoutePath.BLOG}>Blog</Link></li>
      <li><Link href='/contact'>Contact</Link></li> 
    </ul>
  </div>
  <div className="navbar-end">
      <Link  to={RoutePath.LOGIN} className="btn glass text-black mr-5 border-0 bg-red-500">Login</Link>
      <div className="w-10 rounded-full mr-2">
          <img src="/Logo.png" />
	</div>
  </div>

</div>
	);
}

export default Navbar;
