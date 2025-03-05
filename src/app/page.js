import {
  Sidebar,
} from "../components/sidebar";
import { SidebarLayout } from "../components/sidebar-layout";
import FWsidebarFooter from "./components/FWsidebarFooter";
import FWsidebarBody from "./components/FWsidebarBody";
import FWsidebarHeader from "./components/FWsidebarHeader";

export default function Home() {
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
      {/* The page content */}

      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Good afternoon, Joff
      </h1>
      <div className="mt-8 flex items-end justify-between">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          Overview
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
              <option value="last_week">Last week</option>
              <option value="last_two">Last two weeks</option>
              <option value="last_month">Last month</option>
              <option value="last_quarter">Last quarter</option>
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
          <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Tickets
          </div>
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
      <h2 class="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        Recent tickets
      </h2>

      <div class="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)] -mx-(--gutter) overflow-x-auto whitespace-nowrap">
        <div class="inline-block min-w-full align-middle sm:px-(--gutter)">
          <table class="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
            <thead class="text-zinc-500 dark:text-zinc-400">
              <tr class="">
                <th class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                  Ticket number
                </th>
                <th class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                  Date
                </th>
                <th class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                  Council
                </th>
                <th class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                  Vehicle
                </th>
                <th class="text-right border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3000"
                    tabindex="0"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  3000
                </td>
                <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3000"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  May 9, 2024
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3000"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Ealing
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3000"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  <div class="flex items-center gap-2">
                    <span
                      data-slot="avatar"
                      class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                    >
                      <img class="size-full" src="/vw.png" alt=""></img>
                    </span>
                    <span>BA24 PAD</span>
                  </div>
                </td>
                <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3000"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  £80.00
                </td>
              </tr>
              <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3001"
                    tabindex="0"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  3001
                </td>
                <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3001"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  May 5, 2024
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3001"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Brent
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3001"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  <div class="flex items-center gap-2">
                    <span
                      data-slot="avatar"
                      class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                    >
                      <img class="size-full" src="/vw.png" alt=""></img>
                    </span>
                    <span>BA24 LAD</span>
                  </div>
                </td>
                <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3001"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  £80.00
                </td>
              </tr>
              <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3002"
                    tabindex="0"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  3002
                </td>
                <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3002"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Apr 28, 2024
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3002"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Bromley
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3002"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  <div class="flex items-center gap-2">
                    <span
                      data-slot="avatar"
                      class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                    >
                      <img class="size-full" src="/vw.png" alt=""></img>
                    </span>
                    <span>BA24 NAD</span>
                  </div>
                </td>
                <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3002"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  £150.00
                </td>
              </tr>
              <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3003"
                    tabindex="0"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  3003
                </td>
                <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3003"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Apr 23, 2024
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3003"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  Greenwich
                </td>
                <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3003"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  <div class="flex items-center gap-2">
                    <span
                      data-slot="avatar"
                      class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                    >
                      <img class="size-full" src="/mercedes.png" alt=""></img>
                    </span>
                    <span>BA24 MAD</span>
                  </div>
                </td>
                <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                  <a
                    data-row-link="true"
                    aria-label="Order #3003"
                    tabindex="-1"
                    class="absolute inset-0 focus:outline-hidden"
                    data-headlessui-state=""
                    href="/ticket-details"
                  ></a>
                  £80.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SidebarLayout>
  );
}