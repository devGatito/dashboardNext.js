import React from "react";

const ProductsPage = () => {
  return (
    <>
      <div className=" h-auto bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-gray-800  font-semibold">
            Productos / Inventario
          </h1>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-6h6v6m-3 4V3m0 18h4m-4-4H5"
                />
              </svg>
              Exportar
            </button>

            <button className="w-8 h-8 flex justify-center items-center border rounded-lg text-gray-500 hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9h12M6 15h12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-base font-normal">
                  Total Productos
                </span>
                <div className="w-4 h-4 bg-gray-100 rounded-full flex justify-center items-center">
                  {/* Icono o contenido opcional */}
                </div>
              </div>

              <div className="mt-4 text-black text-2xl font-semibold">
                2,847
              </div>

              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
                12.5%
              </div>
            </div>
          ))}
      </div>

      {/* Productos Vendidos y estado de inventario */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black">
              Productos Más Vendidos
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { name: "iPhone 14 Pro", units: "842 unid.", progress: 90 },
              { name: "MacBook Air M2", units: "654 unid.", progress: 75 },
              { name: "AirPods Pro", units: "523 unid.", progress: 60 },
            ].map((product, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <span className="text-base text-black">{product.name}</span>
                  <span className="text-base text-blue-600">
                    {product.units}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta 2: Estado del Inventario */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 ">
          <div className="bg-white w-full rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">
                Estado del Inventario
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                {
                  status: "Stock Normal",
                  percentage: 68,
                  bgColor: "bg-green-50",
                  textColor: "text-green-600",
                },
                {
                  status: "Stock Bajo",
                  percentage: 24,
                  bgColor: "bg-yellow-50",
                  textColor: "text-yellow-600",
                },
                {
                  status: "Agotado",
                  percentage: 8,
                  bgColor: "bg-red-50",
                  textColor: "text-red-600",
                },
                {
                  status: "Sobre Stock",
                  percentage: 12,
                  bgColor: "bg-blue-50",
                  textColor: "text-blue-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex justify-between items-center p-4 rounded-lg ${item.bgColor}`}
                >
                  <div className="flex flex-col items-center w-full">
                    <div className={`text-3xl font-bold ${item.textColor}`}>
                      {item.percentage}%
                    </div>
                    <div className="text-sm text-gray-600">{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*listado de productos */}
      <div className="w-full max-w-full h-[91px] bg-black/0 border-b border-gray-200">
        <div className="w-full max-w-full h-[42px] flex justify-between items-center px-6">
          <div className="text-black text-lg font-semibold font-['Inter'] leading-[18px]">
            Listado de Productos
          </div>
          <div className="flex space-x-4">
            {/* Buscar productos */}
            <div className="w-full max-w-[292px] h-[42px] bg-white rounded-lg border border-gray-200 flex items-center pl-4">
              <input
                type="text"
                className="w-full h-full bg-transparent text-[#adaebc] text-base font-normal font-['Inter'] leading-normal outline-none"
                placeholder="Buscar productos..."
              />
            </div>

            {/* Filtrar */}
            <div className="w-[101.70px] h-[42px] bg-white rounded-lg border border-gray-200 flex justify-center items-center">
              <div className="text-center text-black text-base font-normal font-['Inter']">
                Filtrar
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Table del producto */}
      <div className="w-full max-w-screen-xl mx-auto bg-white border-t border-gray-200">
  {/* Header Row */}
  <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b border-gray-200">
    <div className="flex items-center text-sm font-medium text-gray-500">Producto</div>
    <div className="flex items-center text-sm font-medium text-gray-500">SKU</div>
    <div className="flex items-center text-sm font-medium text-gray-500">Stock</div>
    <div className="flex items-center text-sm font-medium text-gray-500">Estado</div>
    <div className="flex items-center text-sm font-medium text-gray-500">Ventas</div>
    <div className="flex items-center text-sm font-medium text-gray-500">Acciones</div>
  </div>

  {/* Product Row */}
  <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200">
    <div className="flex items-center space-x-3">
      <img
        className="w-10 h-10 rounded-lg border border-gray-200"
        src="https://via.placeholder.com/40x40"
        alt="iPhone 14 Pro"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">iPhone 14 Pro</span>
        <span className="text-xs text-gray-500">Apple</span>
      </div>
    </div>
    <div className="flex items-center text-sm text-gray-500">APP-IPH14P-128</div>
    <div className="flex items-center text-sm text-gray-500">245</div>
    <div className="flex items-center justify-center">
      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Normal</span>
    </div>
    <div className="flex items-center text-sm text-gray-500">842</div>
    <div className="flex items-center space-x-2">
      <button className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
        <span className="text-xs text-gray-500">...</span>
      </button>
      <button className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
        <span className="text-xs text-gray-500">...</span>
      </button>
    </div>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center p-4 bg-black/0 border-t border-gray-200">
    <span className="text-sm text-gray-500">Mostrando 1 a 3 de 2,847 resultados</span>
    <div className="flex items-center space-x-2">
      <button className="w-9 h-9 flex justify-center items-center rounded-lg border bg-gray-200 opacity-50">
        <span className="text-base text-gray-500">←</span>
      </button>
      <button className="w-9 h-9 flex justify-center items-center bg-blue-50 rounded-lg border">
        <span className="text-base text-blue-600">1</span>
      </button>
      <button className="w-9 h-9 flex justify-center items-center rounded-lg border">
        <span className="text-base text-gray-500">2</span>
      </button>
      <button className="w-9 h-9 flex justify-center items-center rounded-lg border">
        <span className="text-base text-gray-500">3</span>
      </button>
      <button className="w-9 h-9 flex justify-center items-center rounded-lg border bg-gray-200 opacity-50">
        <span className="text-base text-gray-500">→</span>
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default ProductsPage;
