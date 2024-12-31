"use client";

import React from "react";
import Link from "next/link";
import Layout from "./components/Layout";
import { routes } from "./utils/routes";

const Home = () => {
  return (
    <>
      <Layout />
      <div>
       

        {/* Botones de navegación dinámicos */}
       
          {routes.map((route) => (
            <Link key={route.name} href={route.path}>
             
            </Link>
          ))}
       </div>
    </>
  );
};

export default Home;
