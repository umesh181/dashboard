import { ChevronDown, Menu, Search } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b sticky top-0 z-20 ">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        <div className="lg:hidden">
          <button className="p-2" onClick={onMenuClick}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 max-w-xl mx-4 lg:mx-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-[300px] top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-[343px] pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <img className="w-6 h-6" src="bellicon.png" alt="bell icon" />
            
          </button>
          <button className="relative p-2">
            <img className="w-6 h-6" src="msglogo.png" alt="message icon" />
            
          </button>
          <button className="flex items-center space-x-2">
            <img
              src="dp.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden lg:inline text-sm">Admirra John</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;