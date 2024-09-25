import { NavLink } from 'react-router-dom';
import { PiCopyrightBold } from 'react-icons/pi';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`w-full md:w-64 bg-zinc-500 bg-opacity-50 text-white h-screen flex flex-col justify-between p-4 md:p-10 fixed z-20 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } transition-transform duration-300 ease-in-out`}
    >
      <nav className="p-4">
        <NavLink to="/admin">
          <h2 className="mt-10 text-2xl font-bold mb-6 text-cyan-900">Admin Dashboard</h2>
        </NavLink>
        <ul>
          <li>
          <NavLink
  to="users"
  className="text-base block py-2 px-4 text-zinc-800 font-bold hover:text-cyan-400 hover:bg-gray-800 hover:text-lg hover:shadow-lg rounded transition duration-300 ease-in-out"
>
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className="text-base block py-2 px-4 text-zinc-800 font-bold hover:text-cyan-400 hover:bg-gray-800 hover:text-lg hover:shadow-lg rounded transition duration-300 ease-in-out"
            >
              Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              className="text-base block py-2 px-4 text-zinc-800 font-bold hover:text-cyan-400 hover:bg-gray-800 hover:text-lg hover:shadow-lg rounded transition duration-300 ease-in-out"
            >
              Manage Orders
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="p-4 flex items-center justify-center">
        <PiCopyrightBold className="h-4 w-4 mr-5 text-xs" />
        <p className="text-xs text-gray-800">&copy; PLASHOE. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
