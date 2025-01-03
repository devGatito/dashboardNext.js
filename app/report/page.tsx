import React from "react";

const ReportComponent = () => {
  return (
    <>
      <div className="w-full h-[499px] bg-gray-50 border-gray-200 p-6 md:p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-gray-800 text-2xl font-bold">Reportes Personalizados</h1>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white rounded-lg px-4 py-2">Excel</button>
            <button className="bg-red-600 text-white rounded-lg px-4 py-2">PDF</button>
          </div>
        </div>

        {/* Date and Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <label className="text-sm text-gray-600">Fecha Inicial</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <label className="text-sm text-gray-600">Fecha Final</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="bg-gray-200 rounded-xl shadow-sm p-4">
            <label className="text-sm text-gray-600">Métricas</label>
            <select className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
              <option>Métrica 1</option>
              <option>Métrica 2</option>
              <option>Métrica 3</option>
            </select>
          </div>
        </div>

        {/* Main Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-800 text-lg font-semibold">Métricas Principales</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Ventas</p>
                <h4 className="text-2xl font-bold">$45,289</h4>
                <p className="text-green-500 text-sm">+12.5%</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Usuarios</p>
                <h4 className="text-2xl font-bold">1,234</h4>
                <p className="text-green-500 text-sm">+8.2%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-800 text-lg font-semibold">Vista Previa</h3>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2 px-4 text-left text-sm font-medium text-gray-600">Fecha</th>
                    <th className="border-b py-2 px-4 text-left text-sm font-medium text-gray-600">Métrica</th>
                    <th className="border-b py-2 px-4 text-left text-sm font-medium text-gray-600">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">01/01/2025</td>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">Ventas</td>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">$1,234</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">01/01/2025</td>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">Usuarios</td>
                    <td className="border-b py-2 px-4 text-sm text-gray-800">156</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportComponent;
