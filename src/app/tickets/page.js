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
          <div class="flex items-end justify-between gap-4">
            <h1 class="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
              Tickets
            </h1>
            <button
              class="-my-0.5 relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default"
              type="button"
              data-headlessui-state=""
            >
              <span
                class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              Create ticket
            </button>
          </div>
          <div class="flow-root">
            <div class="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)] -mx-(--gutter) overflow-x-auto whitespace-nowrap">
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
                            <img
                              class="size-full"
                              src="/mercedes.png"
                              alt=""
                            ></img>
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
                            <img
                              class="size-full"
                              src="/mercedes.png"
                              alt=""
                            ></img>
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
                            <img
                              class="size-full"
                              src="/mercedes.png"
                              alt=""
                            ></img>
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
                            <img
                              class="size-full"
                              src="/mercedes.png"
                              alt=""
                            ></img>
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
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
