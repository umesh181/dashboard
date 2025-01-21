import { MoreHorizontal } from 'lucide-react';
import React from 'react';

const AnnouncementCard = ({
  title,
  announcements,
  date,
  showViewAll = true,
  showCreateNew = false,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {date && (
          <div className="flex items-center">
            <p className="text-sm text-gray-500">{date}</p>
            <button className="ml-2">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Announcements */}
      <div className="space-y-4 ">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex items-start justify-between border border-gray-300 rounded-lg p-3">
            <div>
              <p className="text-gray-800">{announcement.title}</p>
              <p className="text-sm text-gray-500 mt-1">{announcement.time}</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <img src="pin.png" alt="" className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      {showViewAll && (
        <button className="w-full text-center text-red-500 mt-4 py-2 hover:text-red-600">
          See All {title}
        </button>
      )}
      {showCreateNew && (
        <button className="w-full text-center text-red-500 mt-4 py-2 hover:text-red-600">
          Create a New Schedule
        </button>
      )}
    </div>
  );
};

export default AnnouncementCard;
