"use client";
import { Sidebar } from "../../components/sidebar";
import { SidebarLayout } from "../../components/sidebar-layout";
import FWsidebarFooter from "../components/FWsidebarFooter";
import FWsidebarBody from "../components/FWsidebarBody";
import FWsidebarHeader from "../components/FWsidebarHeader";
import Link from "next/link";

export default function Page() {
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
        <h2 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white mt-1">
          Vehicles
        </h2>
      </div>

      <div class="flex flex-wrap items-end justify-between gap-4">
        <div class="max-sm:w-full sm:flex-1">
          <div class="mt-4 flex max-w-xl gap-4">
            <div class="flex-1">
              <span
                data-slot="control"
                class="relative isolate block has-[[data-slot=icon]:first-child]:[&amp;_input]:pl-10 has-[[data-slot=icon]:last-child]:[&amp;_input]:pr-10 sm:has-[[data-slot=icon]:first-child]:[&amp;_input]:pl-8 sm:has-[[data-slot=icon]:last-child]:[&amp;_input]:pr-8 *:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4 [&amp;>[data-slot=icon]:first-child]:left-3 sm:[&amp;>[data-slot=icon]:first-child]:left-2.5 [&amp;>[data-slot=icon]:last-child]:right-3 sm:[&amp;>[data-slot=icon]:last-child]:right-2.5 *:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  data-slot="control"
                  class="relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10"
                >
                  <input
                    placeholder="Search vehicles.."
                    class="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
                    id="headlessui-input-:riq:"
                    data-headlessui-state=""
                    name="search"
                  ></input>
                </span>
              </span>
            </div>
            <div>
              <span
                data-slot="control"
                class="group relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
              >
                <select
                  name="sort_by"
                  class="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-600 dark:data-invalid:data-hover:border-red-600 data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15"
                  id="headlessui-select-:rir:"
                  data-headlessui-state=""
                >
                  <option value="name">Sort by driver</option>
                  <option value="date">Sort by make</option>
                  <option value="status">Sort by date registered</option>
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
        </div>

        {/* <button
          class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%] dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5 [--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)] cursor-default"
          type="button"
          data-headlessui-state=""
        >
          <span
            class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
            aria-hidden="true"
          ></span>
          Import
        </button> */}

        {/* <Link href="vehicle-add"> */}
          <button
            class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default"
            type="button"
            data-headlessui-state=""
          >
            <span
              class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
            Add vehicle
          </button>
        {/* </Link> */}
      </div>

      <div class="grow lg:rounded-lg lg:bg-white lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
        <div class="mx-auto max-w-6xl">
          <div class="flow-root">
            <div class="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)] -mx-(--gutter) overflow-x-auto whitespace-nowrap">
              <div class="inline-block min-w-full align-middle sm:px-(--gutter)">
                <table class="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
                  <thead class="text-zinc-500 dark:text-zinc-400">
                    <tr class="">
                      <th class="w-1/10 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Make
                      </th>
                      <th class="w-1/6 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Model
                      </th>
                      <th class="w-1/6 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Registration
                      </th>
                      <th class="w-1/6 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Date Registered
                      </th>
                      <th class="w-1/6 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Associated Driver
                      </th>
                      <th class="text-right w-1/6 border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                        Fine Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                      <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <div class="flex items-center gap-2">
                          <span
                            data-slot="avatar"
                            class="size-8 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                          >
                            <img class="size-full" src="/vw.png" alt=""></img>
                          </span>
                        </div>
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        VW Golf, 2009
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        X181 PAJ
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
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
                          href="/vehicles"
                        ></a>
                        <div class="flex items-center gap-2">
                          <span
                            data-slot="avatar"
                            class="size-8 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                          >
                            <img class="size-full" src="/joff.png" alt=""></img>
                          </span>
                          <span>Joff Black</span>
                        </div>
                      </td>
                      <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        £200.00
                      </td>
                    </tr>

                    <tr class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                      <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <div class="flex items-center gap-2">
                          <span
                            data-slot="avatar"
                            class="size-8 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                          >
                            <img class="size-full" src="/vw.png" alt=""></img>
                          </span>
                        </div>
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        Sprinter, 2019
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        BA14 NAD
                      </td>
                      <td class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        Jun 10, 2024
                      </td>

                      <td class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        <div class="flex items-center gap-2">
                          <span
                            data-slot="avatar"
                            class="size-8 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                          >
                            <img
                              class="size-full"
                              src="/chris.png"
                              alt=""
                            ></img>
                          </span>
                          <span>Chris Black</span>
                        </div>
                      </td>
                      <td class="text-right relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                        <a
                          data-row-link="true"
                          aria-label="Order #3000"
                          tabindex="-1"
                          class="absolute inset-0 focus:outline-hidden"
                          data-headlessui-state=""
                          href="/vehicles"
                        ></a>
                        £720.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
