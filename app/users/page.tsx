"use client";

import React from "react";

const Users = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full  h-10 px-4 bg-transparent border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <button
          className="flex items-center px-4 py-2 bg-indigo-600 text-white text-base font-normal rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          aria-label="Add User"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add User
        </button>
      </div>
      {/*Filters and Search Users */}

      <div className="w-full h-[74px] flex items-center justify-between px-4">
  <div className="relative w-full max-w-[676px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 3a7.5 7.5 0 010 14.5z"
      />
    </svg>
    <input
      type="text"
      placeholder="Search users..."
      className="w-full h-[42px] pl-10 pr-4 bg-white rounded-lg border border-gray-200 text-gray-700 text-base font-normal outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
    />
  </div>

  <div className="flex space-x-4">
    <button className="w-[147.94px] h-[42px] bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100">
      <span className="text-center text-black text-base font-normal">
        Filter 1
      </span>
    </button>
    <button className="w-[147.94px] h-[42px] bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100">
      <span className="text-center text-black text-base font-normal">
        Filter 2
      </span>
    </button>
  </div>
</div>


      {/*Container*/}
      <section className="w-full max-w-screen-lg mx-auto h-[248px] relative bg-white rounded-lg shadow-sm border-gray-200 overflow-hidden">
        {/* Header Row */}
        <header className="absolute top-0 left-0 w-full h-10 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between items-center h-full px-4">
            <div className="flex-1 text-xs text-gray-500 font-medium tracking-wide">
              User
            </div>
            <div className="flex-1 text-xs text-gray-500 font-medium tracking-wide">
              Role
            </div>
            <div className="flex-1 text-xs text-gray-500 font-medium tracking-wide">
              Status
            </div>
            <div className="flex-1 text-xs text-gray-500 font-medium tracking-wide">
              Last Active
            </div>
            <div className="flex-1 text-xs text-gray-500 font-medium tracking-wide text-right">
              Actions
            </div>
          </div>
        </header>

        {/* User Data Rows */}
        <div className="absolute top-[40px] w-full bg-black/0 border-gray-200">
          {/* First User Row */}
          <div className="flex items-center py-2 border-b border-gray-200">
            <div className="flex items-center w-[365px] px-4">
              <img
                className="w-8 h-8 rounded-full border-gray-200"
                src="https://via.placeholder.com/32x32"
                alt="User Avatar"
              />
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  John Smith
                </div>
                <div className="text-sm text-gray-500">john@example.com</div>
              </div>
            </div>

            <div className="w-[158px] text-center">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold py-1 px-3 rounded-full">
                Admin
              </span>
            </div>
            <div className="w-[171px] text-center">
              <span className="bg-green-100 text-green-800 text-xs font-semibold py-1 px-3 rounded-full">
                Active
              </span>
            </div>
            <div className="w-[220px] text-center">
              <div className="text-sm text-gray-500">2 minutes ago</div>
            </div>
            <div className="w-[205px] flex justify-end space-x-2">
              <button className="text-indigo-600 text-sm font-medium">
                Edit
              </button>
              <button className="text-red-600 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>

          {/* Second User Row */}
          <div className="flex items-center py-2 border-b border-gray-200">
            <div className="flex items-center w-[365px] px-4">
              <img
                className="w-8 h-8 rounded-full border-gray-200"
                src="https://via.placeholder.com/32x32"
                alt="User Avatar"
              />
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-500">sarah@example.com</div>
              </div>
            </div>

            <div className="w-[158px] text-center">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold py-1 px-3 rounded-full">
                User
              </span>
            </div>
            <div className="w-[171px] text-center">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold py-1 px-3 rounded-full">
                Inactive
              </span>
            </div>
            <div className="w-[220px] text-center">
              <div className="text-sm text-gray-500">3 days ago</div>
            </div>
            <div className="w-[205px] flex justify-end space-x-2">
              <button className="text-indigo-600 text-sm font-medium">
                Edit
              </button>
              <button className="text-red-600 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Footer with Pagination */}
        <footer className="absolute bottom-0 left-0 w-full h-[63px] bg-white border-t border-gray-200">
          <div className="flex justify-between items-center h-full px-4">
            <div className="text-sm text-gray-700">
              <span>Showing </span>
              <span className="font-medium">1</span>
              <span> to </span>
              <span className="font-medium">10</span>
              <span> of </span>
              <span className="font-medium">97</span>
              <span> results</span>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-md bg-white border-gray-300">
                1
              </button>
              <button className="px-4 py-2 border rounded-md bg-indigo-50 text-indigo-600 border-gray-300">
                2
              </button>
              <button className="px-4 py-2 border rounded-md bg-white border-gray-300">
                3
              </button>
              <button className="px-4 py-2 border rounded-md bg-white border-gray-300">
                ...
              </button>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Users;
