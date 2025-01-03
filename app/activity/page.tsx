import React from "react";
const ActividadesPage = () => {
  return (
    <>
      <div className="w-full h-[88px] bg-transparent border-gray-200 flex flex-col p-4">
        <div className="text-gray-800 text-2xl font-bold font-['Inter'] leading-normal">
          Actividades Recientes
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="w-[214px] h-10 bg-transparent">
            <input
              type="text"
              className="w-[190px] h-10 bg-white rounded-lg border border-gray-200 pl-6"
              placeholder="Buscar..."
            />
          </div>
          <div className="w-[196px] h-10 bg-transparent">
            <input
              type="text"
              className="w-[174px] h-10 bg-white rounded-lg border border-gray-200 pl-6"
              placeholder="Filtrar..."
            />
          </div>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="flex space-x-4 w-full h-[118px] bg-transparent border-gray-200 mt-8"> {/* Se agregó un margen superior */}
        <div className="w-[336px] h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-base font-normal">
              Total Actividades
            </span>
          </div>
          <div className="text-black text-2xl font-bold mt-2">1,234</div>
          <div className="text-green-500 text-sm mt-2">12% vs ayer</div>
        </div>

        <div className="w-[336px] h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-base font-normal">Errores</span>
          </div>
          <div className="text-black text-2xl font-bold mt-2">23</div>
          <div className="text-red-500 text-sm mt-2">5% vs ayer</div>
        </div>

        <div className="w-[336px] h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-base font-normal">Alertas</span>
          </div>
          <div className="text-black text-2xl font-bold mt-2">45</div>
          <div className="text-yellow-500 text-sm mt-2">Sin cambios</div>
        </div>

        <div className="w-[336px] h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-base font-normal">
              Usuarios Activos
            </span>
          </div>
          <div className="text-black text-2xl font-bold mt-2">89</div>
          <div className="text-green-500 text-sm mt-2">8% vs ayer</div>
        </div>
      </div>

      {/* Registro de Actividades */}
      <div className="w-full max-w-screen-xl mx-auto h-auto bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
        <div className="w-full h-16 bg-black/0 border-b border-gray-200 flex items-center pl-4">
          <div className="text-gray-800 text-lg font-semibold leading-tight">
            Registro de Actividades
          </div>
        </div>

        <div className="w-full h-auto bg-white border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <div className="text-gray-500 text-xs font-medium">Tiempo</div>
            <div className="text-gray-500 text-xs font-medium">Usuario</div>
            <div className="text-gray-500 text-xs font-medium">Tipo</div>
            <div className="text-gray-500 text-xs font-medium">Descripción</div>
            <div className="text-gray-500 text-xs font-medium">Estado</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {/* Row 1 */}
            <div className="grid grid-cols-5 gap-4 p-4">
              <div className="text-sm text-gray-500">Hace 5 min</div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-gray-200"
                  src="https://via.placeholder.com/32x32"
                  alt="User"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Ana García
                  </div>
                  <div className="text-sm text-gray-500">admin@sistema.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-red-800 bg-red-100 rounded-full px-2 py-1">
                  Error
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Error en la conexión con la base de datos
              </div>
              <div className="text-sm text-gray-500">No resuelto</div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-5 gap-4 p-4">
              <div className="text-sm text-gray-500">Hace 15 min</div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-gray-200"
                  src="https://via.placeholder.com/32x32"
                  alt="User"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Carlos López
                  </div>
                  <div className="text-sm text-gray-500">
                    usuario@sistema.com
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-yellow-800 bg-yellow-100 rounded-full px-2 py-1">
                  Alerta
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Intento de acceso no autorizado
              </div>
              <div className="text-sm text-gray-500">En proceso</div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-5 gap-4 p-4">
              <div className="text-sm text-gray-500">Hace 1 hora</div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-gray-200"
                  src="https://via.placeholder.com/32x32"
                  alt="User"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    María Rodríguez
                  </div>
                  <div className="text-sm text-gray-500">
                    soporte@sistema.com
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-green-800 bg-green-100 rounded-full px-2 py-1">
                  Info
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Actualización del sistema completada
              </div>
              <div className="text-sm text-gray-500">Completado</div>
            </div>
          </div>

          {/* Pagination */}
          <div className="w-full h-16 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-4">
            <div className="text-sm text-gray-700">
              Mostrando 1 - 3 de 50 registros
            </div>
            <div className="flex space-x-2">
              <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                &lt;
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-md">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActividadesPage;
