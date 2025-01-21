import { useState } from 'react';
import AnnouncementCard from './components/AnnouncementCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StatCard from './components/Statcard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Available Position',
      value: '24',
      subtitle: '4 Urgently needed',
      subtitleColor: '#FF5151',
      bgColor: '#FFEFE7',
    },
    {
      title: 'Job Open',
      value: '10',
      subtitle: '4 Active hiring',
      subtitleColor: '#3786F1',
      bgColor: '#E8F0FB',
    },
    {
      title: 'New Employees',
      value: '24',
      subtitle: '4 Department',
      subtitleColor: '#EE61CF',
      bgColor: '#FDEBF9',
    },
    {
      title: 'Total Employees',
      value: '216',
      additionalInfo: { men: 120, women: 96 },
      growth: { value: '2%', label: 'Past month' },
      bgColor: '#FFFFFF',
    },
    {
      title: 'Talent Request',
      value: '16',
      additionalInfo: { men: 6, women: 10 },
      growth: { value: '5%', label: 'Past month' },
      bgColor: '#FFFFFF',
    },
  ];



  const schedule = [
    { title: 'Review candidate applications', time: 'Today - 11:30 AM' },
    { title: 'Interview with candidates', time: 'Today - 10:30 AM' },
    { title: 'Short meeting with product designer from IT Department', time: 'Today - 09:15 AM' },
  ];

  const announcements = [
    {
      title: 'Outing schedule for every departement',
      time: '5 Minutes ago',
    },
    {
      title: 'Meeting HR Department',
      time: 'Yesterday, 12:30 PM',
    },
    {
      title: 'IT Department need two more talents for UX/UI Designer position',
      time: 'Yesterday, 09:15 AM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="lg:ml-56">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6 lg:p-8">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[auto,400px] gap-3">
            {/* Left Section */}
            <div>
              {/* First Row: 3 Small Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {stats.slice(0, 3).map((stat, index) => (
                  <StatCard key={index} {...stat} className="w-full max-w-[204px]" />
                ))}
              </div>

              {/* Second Row: 2 Larger Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                {stats.slice(3).map((stat, index) => (
                  <StatCard key={index} {...stat} className="w-full max-w-[312px]" />
                ))}
              </div>

              <AnnouncementCard
                title="Announcement"
                announcements={announcements}
                date="Today, 13 Sep 2021"
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6">
              {/* Recently Activity */}
              <div className="bg-[#1B204A] text-white rounded-2xl p-6 shadow-lg">
                {/* Top Heading */}
                <div className="mb-4">
                  <h2 className="text-base font-semibold mb-4">
                    Recently Activity
                  </h2>
                  {/* Timestamp and Content */}
                  <p className="text-xs text-gray-400">10:40 AM, Fri 10 Sept 2021</p>
                  <h3 className="text-lg font-bold mt-2">You Posted a New Job</h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    Kindly check the requirements and terms of work and make sure everything is right.
                  </p>
                </div>
                {/* Footer */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-300">Today you make 12 Activity</p>
                  <button className="bg-[#FF5151] text-white px-6 py-2 text-sm rounded-lg shadow-md hover:bg-[#FF3333] transition-all">
                    See All Activity
                  </button>
                </div>
              </div>



              {/* Upcoming Schedule */}
              <div className="space-y-6">

                <AnnouncementCard
                  title="Upcoming Schedule"
                  announcements={schedule}
                  date="Today, 13 Sep 2021"
                  showViewAll={false}
                  showCreateNew={true}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
