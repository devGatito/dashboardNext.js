import { FaHome, FaBook, FaHeart, FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardStatus from "./cardStatus";

interface SliderBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SliderBar: React.FC<SliderBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`relative bg-[#FFFFFF] text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } flex flex-col h-full`}
      >
        {/* Botón de la flecha, solo visible en pantallas grandes */}
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#374151] text-white rounded-full p-2 shadow-md hover:bg-[#4B5563] focus:outline-none lg:block hidden"
        >
          {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>

        <nav className="flex flex-col mt-4 space-y-2">
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaHome size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Dashboard
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaBook size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Notebooks
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3 text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaHeart size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Favorites
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center space-x-3  text-[#4B5563] hover:bg-[#EFF6FF] hover:text-[#2563EB] p-2 rounded transition-all duration-200"
          >
            <FaUsers size={20} />
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Team
            </span>
          </a>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <CardStatus />
      </div>
    </div>
  );
};

export default SliderBar;
