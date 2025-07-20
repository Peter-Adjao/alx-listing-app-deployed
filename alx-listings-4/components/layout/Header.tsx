import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow px-6 py-4">
      {/* Top Row: Logo, Search, Auth Buttons */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">🏠 ALX Listings</div>
        <div className="hidden sm:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded"
          />
          <button className="text-sm text-blue-600 hover:underline">Sign In</button>
          <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded">
            Sign Up
          </button>
        </div>
      </div>

      {/* Bottom Row: Types of accommodation */}
      <nav className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
        <button className="hover:text-blue-600">Rooms</button>
        <button className="hover:text-blue-600">Mansion</button>
        <button className="hover:text-blue-600">Countryside</button>
        <button className="hover:text-blue-600">Cabin</button>
        <button className="hover:text-blue-600">Penthouse</button>
        <button className="hover:text-blue-600">Villa</button>
        <button className="hover:text-blue-600">Loft</button>
      </nav>
    </header>
  );
};

export default Header;
