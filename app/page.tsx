"use client";

import React from "react";
import Link from "next/link";
import Layout from "./components/Layout";
import { routes } from "./utils/routes";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="container mx-auto p-4">
       

        {/* Botones de navegación dinámicos */}
       
          {routes.map((route) => (
            <Link key={route.name} href={route.path}>
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                {route.name}
              </button>
            </Link>
          ))}
       </div>
    </>
  );
};

export default Home;
