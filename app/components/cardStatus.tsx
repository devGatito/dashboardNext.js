"use client";

import React from "react";

const CardStatus = () => {
  return (
    <section className="">
      {" "}
      {/* Añadí mt-16 para dar espacio al navbar */}
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
      {/*cards*/}
      <div className="relative bg-transparent border-gray-200 p-2">
        {/* Contenedor principal con Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Tarjeta 1: Tendencia de Ventas */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-black text-base font-semibold">
                Tendencia de<br/> Ventas
              </p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-50 rounded text-blue-600 text-sm">
                  Día
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded text-gray-600 text-sm">
                  Semana
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded text-gray-600 text-sm">
                  Mes
                </button>
              </div>
            </div>

            <div className="relative h-72 bg-black/0 border-gray-200">
              {/* Barras de Tendencia */}
              <div className="absolute bottom-0 left-0 flex space-x-2">
                <div className="w-2 bg-blue-100 h-[135px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-200 h-[195px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-300 h-[165px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-400 h-[225px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-500 h-[255px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-600 h-[285px] rounded-tl rounded-tr" />
                <div className="w-2 bg-blue-700 h-[225px] rounded-tl rounded-tr" />
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Comparación de Períodos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-black text-base font-semibold">
                Comparación de Períodos
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600 text-sm">2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600 text-sm">2024</span>
                </div>
              </div>
            </div>

            <div className="relative h-72 bg-black/0 border-gray-200">
              {/* Líneas de Comparación */}
              <div className="absolute top-[50%] left-0 w-full h-0.5 bg-gray-100" />
              <div className="absolute top-[25%] left-0 w-0.5 h-[50%] bg-gray-100" />
              <div className="absolute top-[25%] left-[35%] w-0.5 h-[50%] bg-gray-100" />
              <div className="absolute top-[25%] left-[70%] w-0.5 h-[50%] bg-gray-100" />
              <div className="absolute top-[25%] left-[90%] w-0.5 h-[50%] bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardStatus;
