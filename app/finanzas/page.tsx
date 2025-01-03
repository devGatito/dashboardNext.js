import React from "react";

const FinanzasPage = () => {
  return (
    <>
      <div className="w-full bg-white rounded-lg border-2 border-[#ced4da] flex flex-col justify-start items-start overflow-hidden">
        <div className="relative bg-black/0 border-gray-200">
          <div className="bg-gray-50 border-gray-200 p-4 sm:p-6">
            <div className="flex justify-between">
              <div className="w-full sm:w-1/4 p-4 bg-white rounded-xl shadow-sm border-gray-200">
                <h3 className="text-gray-500 text-base">Ingresos Totales</h3>
                <div className="text-gray-800 text-2xl font-bold">$128,500</div>
                <div className="text-green-500 text-sm">12.5% vs mes anterior</div>
              </div>
              <div className="w-full sm:w-1/4 p-4 bg-white rounded-xl shadow-sm border-gray-200">
                <h3 className="text-gray-500 text-base">Egresos Totales</h3>
                <div className="text-gray-800 text-2xl font-bold">$85,200</div>
                <div className="text-red-500 text-sm">8.3% vs mes anterior</div>
              </div>
              <div className="w-full sm:w-1/4 p-4 bg-white rounded-xl shadow-sm border-gray-200">
                <h3 className="text-gray-500 text-base">Balance Neto</h3>
                <div className="text-gray-800 text-2xl font-bold">$43,300</div>
                <div className="text-green-500 text-sm">15.2% vs mes anterior</div>
              </div>
              <div className="w-full sm:w-1/4 p-4 bg-white rounded-xl shadow-sm border-gray-200">
                <h3 className="text-gray-500 text-base">Proyección Q2</h3>
                <div className="text-gray-800 text-2xl font-bold">$150,000</div>
                <div className="text-green-500 text-sm">16.7% crecimiento estimado</div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border-gray-200 p-6">
                <h3 className="text-gray-800 text-lg font-semibold">Flujo de Efectivo</h3>
                <div className="flex justify-between">
                  <div className="bg-blue-50 rounded-lg p-2">
                    <span className="text-center text-blue-600">Mensual</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <span className="text-center text-gray-600">Trimestral</span>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 p-6 rounded-lg">
                  <div className="text-center text-gray-500">Gráfico de Flujo de Efectivo</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border-gray-200 p-6">
                <h3 className="text-gray-800 text-lg font-semibold">Comparación Trimestral</h3>
                <div className="flex justify-between">
                  <div className="bg-blue-50 rounded-lg p-2">
                    <span className="text-center text-blue-600">2025</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <span className="text-center text-gray-600">2024</span>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 p-6 rounded-lg">
                  <div className="text-center text-gray-500">Gráfico de Comparación Trimestral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanzasPage;
