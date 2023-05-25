
import './Navbar.css'
const Navbar = () => {
	return (
		<div className="navbar bg-base-200 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
       <li><a>Chef</a></li>
        <li><a>Blog</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost bg-transparent normal-case text-3xl headerStyle">F <span className="text-red-400">oo</span>dy</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
       <li><a>Chef</a></li>
        <li><a>Blog</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
      <button className="btn glass text-black mr-5 border-0 bg-red-500">Login</button>
      <div className="w-10 rounded-full mr-2">
          <img src="/Logo.png" />
	</div>
  </div>

</div>
	);
}

export default Navbar;
