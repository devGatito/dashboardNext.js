"use client";

import React from "react";

const CardStatus = () => {
  return (
    <section className="p-6 mt-16"> {/* Añadí mt-16 para dar espacio al navbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tarjeta 1 */}
        <article className="w-full h-32 bg-white rounded-xl shadow-sm border-gray-200 relative">
          <header className="p-4">
            <h2 className="text-gray-500 text-sm font-normal leading-[14px]">
              Total Sales
            </h2>
            <p className="text-gray-900 text-xl font-bold leading-normal">
              $84,245
            </p>
            <p className="text-green-500 text-sm font-normal leading-[14px]">
              8.2% vs last month
            </p>
          </header>
          <aside className="absolute right-4 top-4 bg-indigo-100 p-2 rounded-full">
            <img src="/first.svg" alt="First Icon" className="w-6 h-6" />
          </aside>
        </article>

        {/* Tarjeta 2 */}
        <article className="w-full h-32 bg-white rounded-xl shadow-sm border-gray-200 relative">
          <header className="p-4">
            <h2 className="text-gray-500 text-sm font-normal leading-[14px]">
              New Orders
            </h2>
            <p className="text-gray-900 text-xl font-bold leading-normal">
              1,245
            </p>
            <p className="text-green-500 text-sm font-normal leading-[14px]">
              12.4% vs last week
            </p>
          </header>
          <aside className="absolute right-4 top-4 bg-blue-100 p-2 rounded-full">
            <img src="/second.svg" alt="Second Icon" className="w-6 h-6" />
          </aside>
        </article>

        {/* Tarjeta 3 */}
        <article className="w-full h-32 bg-white rounded-xl shadow-sm border-gray-200 relative">
          <header className="p-4">
            <h2 className="text-gray-500 text-sm font-normal leading-[14px]">
              Revenue
            </h2>
            <p className="text-gray-900 text-xl font-bold leading-normal">
              $12,530
            </p>
            <p className="text-red-500 text-sm font-normal leading-[14px]">
              -2.1% vs last month
            </p>
          </header>
          <aside className="absolute right-4 top-4 bg-red-100 p-2 rounded-full">
            <img src="/three.svg" alt="Third Icon" className="w-6 h-6" />
          </aside>
        </article>

        {/* Tarjeta 4 */}
        <article className="w-full h-32 bg-white rounded-xl shadow-sm border-gray-200 relative">
          <header className="p-4">
            <h2 className="text-gray-500 text-sm font-normal leading-[14px]">
              Customers
            </h2>
            <p className="text-gray-900 text-xl font-bold leading-normal">
              7,852
            </p>
            <p className="text-green-500 text-sm font-normal leading-[14px]">
              5.6% vs last month
            </p>
          </header>
          <aside className="absolute right-4 top-4 bg-yellow-100 p-2 rounded-full">
            <img src="/fourt.svg" alt="Fourth Icon" className="w-6 h-6" />
          </aside>
        </article>
      </div>
    </section>
  );
};

export default CardStatus;
