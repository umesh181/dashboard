import {
  Building2,
  Calendar,
  HeadphonesIcon,
  LayoutGrid,
  Settings,
  UserCircle,
  Users,
  X,
} from 'lucide-react';
  
  const Sidebar = ({ isOpen, onClose }) => {
    const mainMenuItems = [
      { icon: LayoutGrid, label: 'Dashboard', active: true },
      { icon: Users, label: 'Recruitment' },
      { icon: Calendar, label: 'Schedule' },
      { icon: UserCircle, label: 'Employee' },
      { icon: Building2, label: 'Department' },
    ];
  
    const otherMenuItems = [
      { icon: HeadphonesIcon, label: 'Support' },
      { icon: Settings, label: 'Settings' },
    ];
  
    return (
      <div
        className={`fixed inset-y-0 left-0 z-30 w-56 bg-white shadow-lg transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-logocl">WeHR</span>
            </div>
            <button onClick={onClose} className="lg:hidden p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
  
        <div className="mt-4">
          {/* MAIN MENU */}
          <div className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
            MAIN MENU
          </div>
          <div className="mt-4 px-4 space-y-1">
            {mainMenuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm ${
                  item.active
                    ? 'text-red-400'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
  
          {/* OTHER MENU */}
          <div className="mt-8 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            OTHER
          </div>
          <div className="mt-4 px-4 space-y-1">
            {otherMenuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm text-gray-600 hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
