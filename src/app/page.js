"use client";
import { Sidebar } from "../components/sidebar";
import { SidebarLayout } from "../components/sidebar-layout";
import FWsidebarFooter from "./components/FWsidebarFooter";
import FWsidebarBody from "./components/FWsidebarBody";
import FWsidebarHeader from "./components/FWsidebarHeader";
// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts";
import { React, Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function Home() {
  
  const [error, setError] = useState("");


  return (

      
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-24 h-20 mr-2"
              src={"/finewise-logo-dark.png"}
              alt="logo"
            ></img>
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>

              {error ? (
                <div className="flex justify-center px-6 py-2 text-red-500">
                  {error}
                </div>
              ) : null}

              <form class="space-y-4 md:space-y-6" onSubmit={ console.log("submit") }>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
               
                <div className="mt-4">
                  <Link href="/dashboard">
                  <button
                    type="submit"
                    class="w-full text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-600 focus:outline-none dark:focus:ring-slate-600"
                  >
                    Sign In
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

  );
}
