import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import paymenticons from './assest/paymenticons.png';
import bgbtLB from './assest/bgbtLB.jpg';
import { faBagShopping, faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "COLLECTION", to: "/Collection", current: true },
  { name: "MEN", to: "/Men", current: false },
  { name: "WOMEN", to: "/women", current: false },
  { name: "LOOK BOOK", to: "/lookbook", current: false },
  { name: "CONTACT", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ cartItems, handleLogout }) {
  const [name, setName] = useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/users/${id}`)
        .then((res) => {
          setName(res.data);
        })
        .catch((err) =>
          toast.error("Failed to fetch customer details", err.message)
        );
    }
  }, [id]);

  return (
    <>
      <Disclosure as="nav" className="bg-zinc-600">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to="/Home">
                  <h1 className="mr-14 text-xl sm:text-2xl font-bold text-cyan-600 italic">
                    PLASHOE
                  </h1>
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavLink className="p-2 mt-5" to="/OurStory">
                OUR STORY
              </NavLink>
              <NavLink
                className="p-2 cart-link mt-5"
                to="/cart"
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "8px 12px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: "24px" }}
                />
                <span className="cart-badge">{cartItems.length}</span>
              </NavLink>
              <Menu as="div" className="relative ml-2">
                <div>
                  <MenuButton className="mt-5 relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <FontAwesomeIcon icon={faUser} />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    {({ active }) => (
                      <NavLink
                        to="/Profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <h1>Hi, {name ? name.name.toUpperCase() : "Guest"}</h1>
                        {name ? "Your Profile" : "Please Log In"}
                      </NavLink>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <NavLink
                        to={name ? "/login" : "/login"}
                        onClick={name ? handleLogout : undefined}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        {name ? "Log Out" : "Log In"}
                      </NavLink>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={NavLink}
                to={item.to}
                aria-current={item.current ? "page" : undefined}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <main>
        <Outlet />
      </main>
      <footer>
        <div
          style={{ backgroundImage: `url(${bgbtLB})` }}
          className="bg-cover bg-center h-40 sm:h-60 lg:h-72 m-4"
        >
          <h1
            className="text-cyan-400 text-lg sm:text-xl lg:text-3xl text-center p-6"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}
          >
            Better for People & the Planet
          </h1>
          <h2
            className="text-center text-xs sm:text-sm lg:text-base text-cyan-200"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}
          >
            Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in
            vulputate
          </h2>
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-6">
            <a href="/Men">
              <button className="bg-zinc-800 text-cyan-400 p-2 sm:p-4 text-xs sm:text-sm lg:text-base hover:bg-zinc-500 rounded-full">
                Shop Men
              </button>
            </a>
            <a href="/women">
              <button className="bg-zinc-800 text-cyan-400 p-2 sm:p-4 text-xs sm:text-sm lg:text-base hover:bg-zinc-500 rounded-full">
                Shop Women
              </button>
            </a>
          </div>
        </div>

        <div className="p-2 bg-gray-100 w-full h-auto shadow-inner lg:shadow-md sm:h-40">
          <div className="sm:grid grid-cols-2 lg:flex justify-around gap-2 m-2 sm:mx-4">
            <div>
              <h2 className="text-sm sm:text-md font-semibold text-center lg:text-left">
                PLASHOE
              </h2>
              <h3 className="text-xs sm:text-sm text-gray-500">
                Developed By Dev Company
              </h3>
              <h3 className="text-xs sm:text-sm text-gray-500">
                Project inspired by Dev Community
              </h3>
              <div className="flex justify-center lg:justify-start my-4">
                <img src={paymenticons} alt="Payment Icons" className="h-6" />
              </div>
            </div>

            <div className="text-xs text-gray-400 text-center lg:text-left my-2">
              <h3>
                <FontAwesomeIcon icon={faBagShopping} className="mx-2" />
                100% Quality Product
              </h3>
              <h3>
                <FontAwesomeIcon icon={faTruckArrowRight} className="mx-2" />
                Fast Delivery
              </h3>
            </div>
            <div className="text-xs text-gray-500 text-center lg:text-left my-2">
              <h3>ABOUT US</h3>
              <h3>OUR STORY</h3>
              <h3>TEAM</h3>
            </div>
            <div className="text-xs text-gray-500 text-center lg:text-left my-2">
              <h3>HELP</h3>
              <h3>SUPPORT</h3>
              <h3>FAQ</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
