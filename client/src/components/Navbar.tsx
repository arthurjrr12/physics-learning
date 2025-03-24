import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useUser } from "@/lib/userContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isLoggedIn } = useUser();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Career Paths", path: "/paths" }, // Changed from "Courses" to "Career Paths"
    { name: "Physics Learning", path: "/physics-learning" }, // New button
    { name: "Resources", path: "/resources" }, // New button
    { name: "STEM Publications", path: "/stem-publications" }, // New button
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
              <i className="ri-atom-line text-primary text-3xl mr-2"></i>
              <span className="font-poppins font-semibold text-xl text-primary">PhysicsEdu</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <div key={item.path} onClick={() => window.location.href = item.path}>
                  <div 
                    className={`${
                      location === item.path
                        ? "border-primary text-primary"
                        : "border-transparent text-neutral-600 hover:text-primary hover:border-primary"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <div 
                onClick={() => window.location.href = '/account'}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-opacity-90 transition-colors cursor-pointer"
              >
                My Account
              </div>
            ) : (
              <div 
                onClick={() => window.location.href = '/login'}
                className="px-4 py-2 rounded-md text-sm font-medium text-primary bg-white border border-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                Login
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div 
              key={item.path} 
              onClick={() => {
                window.location.href = item.path;
                setMobileMenuOpen(false);
              }}
              className={`${
                location === item.path
                  ? "border-primary text-primary bg-primary bg-opacity-10"
                  : "border-transparent text-neutral-600 hover:bg-neutral-100 hover:text-primary"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer`}
            >
              {item.name}
            </div>
          ))}
          {!isLoggedIn && (
            <div 
              onClick={() => {
                window.location.href = '/login';
                setMobileMenuOpen(false);
              }}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-primary cursor-pointer"
            >
              Login
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;