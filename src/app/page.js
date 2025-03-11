"use client";
import { Sidebar } from "../components/sidebar";
import { SidebarLayout } from "../components/sidebar-layout";
import FWsidebarFooter from "./components/FWsidebarFooter";
import FWsidebarBody from "./components/FWsidebarBody";
import FWsidebarHeader from "./components/FWsidebarHeader";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { React, Fragment, useState, useEffect } from "react";
import dynamic from 'next/dynamic'

export default function Home() {

  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

  const [tree, setTree] = useState({
    series: [
      {
        data: [
          {
            x: "Croydon",
            y: 218,
          },
          {
            x: "Brent",
            y: 149,
          },
          {
            x: "Enfield",
            y: 184,
          },
          {
            x: "Barnet",
            y: 55,
          },
          {
            x: "Camden",
            y: 84,
          },
          {
            x: "Islington",
            y: 31,
          },
          {
            x: "Lewisham",
            y: 70,
          },
          {
            x: "Greenwich",
            y: 30,
          },
          {
            x: "Harrow",
            y: 44,
          },
          {
            x: "Merton",
            y: 68,
          },
          {
            x: "Sutton",
            y: 28,
          },
          {
            x: "Hackney",
            y: 19,
          },
          {
            x: "Haringey",
            y: 29,
          },
        ],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Areas where you get the most tickets",
        align: "center",
      },
      colors: [
        "#3B93A5",
        "#F7B844",
        "#ADD8C7",
        "#EC3C65",
        "#CDD7B6",
        "#C1F666",
        "#D43F97",
        "#1E5D8C",
        "#421243",
        "#7F94B0",
        "#EF6537",
        "#C0ADDB",
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false,
        },
      },
    },
  });

  const [bar, setBar] = useState({
    series: [
      {
        name: "Parking",
        data: [44, 55, 57, 56, 61, 6],
      },
      {
        name: "Congestion",
        data: [76, 85, 101, 98, 87, 10],
      },
      {
        name: "Bus Lane",
        data: [35, 41, 36, 26, 45, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        width: "50%",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      },
      yaxis: {
        title: {
          text: "Tickets by month",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " ";
          },
        },
      },
    },
  });

  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <FWsidebarHeader />
          <FWsidebarBody />
          <FWsidebarFooter />
        </Sidebar>
      }
    >
      <div className="flex items-end justify-between">
        <h2 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
          Welcome back, Joff
        </h2>
        <div>
          <span
            data-slot="control"
            className="group relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
          >
            <select
              name="period"
              className="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-600 dark:data-invalid:data-hover:border-red-600 data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15"
              id="headlessui-select-:R6afkja:"
              data-headlessui-state=""
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
            </select>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                class="size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                viewBox="0 0 16 16"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M5.75 10.75L8 13L10.25 10.75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.25 5.25L8 3L5.75 5.25"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>

      <div class="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Drivers Registered
          </div>
          <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">37</div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
              +4.5%
            </span>{" "}
            <span class="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Vehicles Registered
          </div>
          <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">80</div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-hover:bg-pink-400/20">
              -0.5%
            </span>{" "}
            <span class="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Tickets</div>
          <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">18</div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
              +4.5%
            </span>{" "}
            <span class="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Appeals</div>
          <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">4</div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
              +20.0%
            </span>{" "}
            <span class="text-zinc-500">from last week</span>
          </div>
        </div>
      </div>

      {/* <div class="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Top ticketed drivers
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="w-60 text-zinc-500">Chris Black</span>
            <span class="ml-4 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              12
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Bea Shergill</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              10
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Matt Navin</span>
            <span class="ml-5 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-amber-400/20 text-amber-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-amber-300 dark:group-data-hover:bg-amber-400/15">
              8
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Joff Black</span>
            <span class="ml-6 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-green-400/20 text-green-700 group-data-hover:bg-lime-400/30 dark:bg-green-400/10 dark:text-green-300 dark:group-data-hover:bg-green-400/15">
              0
            </span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Top ticketed vehicles
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="w-60 text-zinc-500">NA24 BAD</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              7
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">NA24 MAD</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              7
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">NA24 LAD</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-amber-400/20 text-amber-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-amber-300 dark:group-data-hover:bg-amber-400/15">
              6
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">NA24 SAD</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-green-400/20 text-green-700 group-data-hover:bg-lime-400/30 dark:bg-green-400/10 dark:text-green-300 dark:group-data-hover:bg-green-400/15">
              2
            </span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Top ticket types
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="w-60 text-zinc-500">Parking</span>
            <span class="ml-4 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              8
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Congestion</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              5
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Bus Lane</span>
            <span class="ml-5 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-amber-400/20 text-amber-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-amber-300 dark:group-data-hover:bg-amber-400/15">
              8
            </span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            class="w-full border-t border-zinc-950/10 dark:border-white/10"
          ></hr>
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Ticket statuses
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="w-60 text-zinc-500">Settled</span>
            <span class="ml-4 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              18
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Appealled</span>
            <span class="ml-3 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-red-400/20 text-red-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-hover:bg-red-400/15">
              11
            </span>
          </div>
          <div class="mt-3 text-sm/6 sm:text-xs/6">
            <span class="text-zinc-500">Rejected</span>
            <span class="ml-5 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-amber-400/20 text-amber-700 group-data-hover:bg-lime-400/30 dark:bg-red-400/10 dark:text-amber-300 dark:group-data-hover:bg-amber-400/15">
              3
            </span>
          </div>
        </div>
      </div> */}

      <div className="flex flex-row mt-10">
        <div className="w-[50%] p-8">
          <div id="chart">
            {typeof window !== "undefined" && (
              <ReactApexChart
                options={bar.options}
                series={bar.series}
                type="bar"
                height={350}
              />
            )}
          </div>
          <div id="html-dist"></div>
        </div>

        <div className="w-[50%] p-8 ml-[5%]">
          <div>
            <div id="chart">
              {typeof window !== "undefined" && (
                <ReactApexChart
                  options={tree.options}
                  series={tree.series}
                  type="treemap"
                  height={300}
                />
              )}
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
