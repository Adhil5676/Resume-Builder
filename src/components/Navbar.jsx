import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="
      fixed top-2 left-1/2 -translate-x-1/2 z-50
      w-[95vw] max-w-3xl
      rounded-2xl
      bg-white/30
      backdrop-blur-lg
      shadow-xl
      border border-white/20
      px-6 py-4
      transition-all
    ">
      <div className="flex justify-between items-center ">
        <Link
          to="/"
          className="text-2xl font-bold font-header tracking-tight text-rose-700 drop-shadow-sm"
         
        >
          R-BEE..
        </Link>

        
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Home
          </Link>
          <Link
            to="/builder"
            className="text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Builder
          </Link>
          <Link
            to="/preview"
            className="text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Preview
          </Link>
          <Link
            to="/mockinterview"
            className="text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Mock
          </Link>
        </div>

        {/* burger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none bg-white/40 rounded-lg p-1 hover:bg-white/60 transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* burger..... */}
      {menuOpen && (
        <div className="
          md:hidden
          mt-4
          rounded-xl
          bg-white/60
          backdrop-blur-md
          shadow-lg
          border border-white/20
          px-4 py-3
          space-y-2
          animate-fade-in
        ">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Home
          </Link>
          <Link
            to="/builder"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Builder
          </Link>
          <Link
            to="/preview"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 font-medium hover:text-rose-700 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/40"
          >
            Preview
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;