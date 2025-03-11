"use client";
import { Sidebar } from "../../components/sidebar";
import { SidebarLayout } from "../../components/sidebar-layout";
import FWsidebarFooter from "../components/FWsidebarFooter";
import FWsidebarBody from "../components/FWsidebarBody";
import FWsidebarHeader from "../components/FWsidebarHeader";

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
      <div class="grow lg:rounded-lg lg:bg-white lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
        <div class="mx-auto max-w-6xl">
          <div class="max-lg:hidden">
            <a
              class="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
              data-headlessui-state=""
              href="/tickets"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="size-4 fill-zinc-400 dark:fill-zinc-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Tickets
            </a>
          </div>
          <div class="mt-4 lg:mt-8">
            <div class="flex items-center gap-4">
              <h1 class="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
                Ticket 3000
              </h1>
              <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                Paid
              </span>
            </div>
            <div class="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
              <div class="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
                <span class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z"></path>
                  </svg>
                  <span>£80.00</span>
                </span>
                <span class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="inline-flex gap-3">
                    American Express{" "}
                    <span>
                      <span aria-hidden="true">••••</span> 1254
                    </span>
                  </span>
                </span>
                <span class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>May 9, 2024</span>
                </span>
              </div>
              <div class="flex gap-4">
                <button
                  type="button"
                //   onClick={() => alert('Refund')}
                  class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%] dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5 [--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)] cursor-default"
                  data-headlessui-state=""
                >
                  <span
                    class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  Appeal
                </button>
                <button
                  class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default"
                  type="button"
                  data-headlessui-state=""
                >
                  <span
                    class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Summary
            </h2>
            <hr
              role="presentation"
              class="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10"
            ></hr>
            <dl class="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6">
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Council
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                Brent
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Vehicle
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                <a
                  class="flex items-center gap-2"
                  data-headlessui-state=""
                  href="/events/1000"
                >
                  <span
                    data-slot="avatar"
                    class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                  >
                    <img
                      class="size-full"
                      src="./mercedes.png"
                      alt=""
                    ></img>
                  </span>
                  <span>NA24 LAD</span>
                </a>
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Type
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                Parking
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Driver
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                <a
                  class="flex items-center gap-2"
                  data-headlessui-state=""
                  href="/events/1000"
                >
                  <span
                    data-slot="avatar"
                    class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/(--ring-opacity) dark:outline-white/(--ring-opacity) rounded-full *:rounded-full"
                  >
                    <img
                      class="size-full"
                      src="./joff.png"
                      alt=""
                    ></img>
                  </span>
                  <span>Joff Black</span>
                </a>
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Amount
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                £80.00
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Amount if not paid in 30 days
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                £80.00 → £160.00
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Images
              </dt>
              <dd class="flex flex-row pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
              <img class="aspect-3/2 rounded-lg shadow-sm w-70 h-50" src="/map.png" alt=""></img>
              <img class="ml-2 aspect-3/2 rounded-lg shadow-sm w-50 h-50" src="/pcn.png" alt=""></img>
              <img class="ml-2 aspect-3/2 rounded-lg shadow-sm w-50 h-50" src="/pcn.png" alt=""></img>
              </dd>
     
            </dl>
          </div>
          {/* <div class="mt-12">
            <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Payment method
            </h2>
            <hr
              role="presentation"
              class="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10"
            ></hr>
            <dl class="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6">
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Transaction ID
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                ch_2HLf8DfYJ0Db7asfCC5T546TY
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Card number
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                •••• 1254
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Card type
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                American Express
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Card expiry
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                01 / 2025
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Owner
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                Leslie Alexander
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Email address
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                leslie.alexander@example.com
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Address
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                123 Main St. Toronto, ON
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                Country
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                <span class="inline-flex gap-3">
                  <img src="/flags/ca.svg" alt="Canada"></img>Canada
                </span>
              </dd>
              <dt class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                CVC
              </dt>
              <dd class="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                  Passed successfully
                </span>
              </dd>
            </dl>
          </div> */}
        </div>
      </div>
    </SidebarLayout>
  );
}
