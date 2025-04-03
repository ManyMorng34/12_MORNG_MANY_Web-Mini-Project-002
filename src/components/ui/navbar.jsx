import React from 'react'

export default function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4 border-b border-blue-500 bg-white w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Workspace</span>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-blue-600 font-medium underline underline-offset-4">
            HRD Design
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="text-gray-600 hover:text-black">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-right text-sm">
              <div className="font-medium text-gray-800">Monster</div>
              <div className="text-cyan-500 text-xs">
                blackmonster@gmail.com
              </div>
            </div>
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="w-9 h-9 rounded-full border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
