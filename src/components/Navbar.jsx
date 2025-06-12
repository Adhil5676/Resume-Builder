import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-opacity-10 shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-header font-bold text-rose-700">
          R-BEE..
        </Link>

        {/* Desktop Menu */}
        <div className="hidden fo md:flex space-x-6">
          <Link to="/" className="text-gray-700 font-body1 hover:text-rose-700">
            Home
          </Link>
          <Link to="/builder" className="text-gray-700 font-body1 hover:text-rose-700">
            Builder
          </Link>
          <Link to="/preview" className="text-gray-700 font-body1 hover:text-rose-700">
            Preview
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden font-body1 px-6 pt-4 pb-2 space-y-2">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-rose-700"
          >
            Home
          </Link>
          <Link
            to="/builder"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-rose-700"
          >
            Builder
          </Link>
          <Link
            to="/preview"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-rose-700"
          >
            Preview
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
