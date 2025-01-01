import React from "react";

const AnalisisComponent = () => {
  return (
    <>
      <div className="relative bg-transparent border-b border-gray-200">
        <div className="relative top-0 flex items-center w-full">
          <h2 className="text-gray-800 text-2xl font-bold font-inter">
            Análisis de Ventas
          </h2>

          <div className="flex-grow flex justify-end items-center space-x-4">
            <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 flex items-center h-10">
              <button className="w-[165px] h-full text-center text-black text-base font-normal font-inter">
                01 Ene - 31 Ene, 2025
              </button>
            </div>

            <div className="relative bg-blue-600 rounded-lg shadow-sm flex items-center px-4 h-10">
              <span className="text-white text-base font-normal font-inter">
                Exportar
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Tarjetas*/}
      <div className="relative bg-transparent border-b border-gray-200 p-4">
        {/* Contenedor principal con Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tarjeta 1: Ventas Totales */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col space-y-2">
              <div className="text-gray-600 text-sm font-normal">
                Ventas Totales
              </div>
              <div className="text-black text-2xl font-bold">$128,430</div>
              <div className="text-green-500 text-sm">+12.5%</div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded mt-4">
              <div className="w-[85%] h-2 bg-blue-600 rounded"></div>
            </div>
          </div>

          {/* Tarjeta 2: Órdenes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col space-y-2">
              <div className="text-gray-600 text-sm font-normal">Órdenes</div>
              <div className="text-black text-2xl font-bold">1,432</div>
              <div className="text-green-500 text-sm">+8.2%</div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded mt-4">
              <div className="w-[65%] h-2 bg-blue-600 rounded"></div>
            </div>
          </div>

          {/* Tarjeta 3: Ticket Promedio */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col space-y-2">
              <div className="text-gray-600 text-sm font-normal">
                Ticket Promedio
              </div>
              <div className="text-black text-2xl font-bold">$89.75</div>
              <div className="text-red-500 text-sm">-2.4%</div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded mt-4">
              <div className="w-[45%] h-2 bg-blue-600 rounded"></div>
            </div>
          </div>

          {/* Tarjeta 4: Clientes Nuevos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col space-y-2">
              <div className="text-gray-600 text-sm font-normal">
                Clientes Nuevos
              </div>
              <div className="text-black text-2xl font-bold">385</div>
              <div className="text-green-500 text-sm">+15.7%</div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded mt-4">
              <div className="w-[80%] h-2 bg-blue-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      {/*Barras */}
      <div className="relative bg-transparent border-gray-200 p-4">
        {/* Contenedor principal con Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Tarjeta 1: Tendencia de Ventas */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-black text-base font-semibold">
                Tendencia de Ventas
              </div>
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
      {/*Top Productos & ventas de region */}

   
  
  
  
   
  
  
    </>
  );
};

export default AnalisisComponent;
