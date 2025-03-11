"use client";
import { Sidebar } from "../../components/sidebar";
import { SidebarLayout } from "../../components/sidebar-layout";
import FWsidebarFooter from "../components/FWsidebarFooter";
import FWsidebarBody from "../components/FWsidebarBody";
import FWsidebarHeader from "../components/FWsidebarHeader";
import { React, Fragment, useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [message, setMessage] = useState("");

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
      <div class="grow ">
        <div class="mx-auto max-w-6xl">
          <form method="post" class="mx-auto max-w-4xl">
            {/* <h1 class="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
              Greenwich Borough added!
            </h1>
            <hr
              role="presentation"
              class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
            ></hr> */}

            <div class="mt-4 flex flex-wrap items-end justify-between gap-4">
              <div class="flex flex-wrap items-center gap-6">
                <div class="w-32 shrink-0">
                  <img
                    class="rounded-lg shadow-sm"
                    src="/greenwich.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h1 class="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
                      FineWise: Now available in Greenwich
                    </h1>
                    <span class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                      Live
                    </span>
                  </div>
                  <div class="mt-2 text-sm/6 text-zinc-500">
                    May 20, 2024 at 10 PM <span aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class="flex gap-4">
                <button
                  class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default"
                  type="button"
                  data-headlessui-state=""
                >
                  <span
                    class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  Mark as read
                </button>
              </div>
            </div>

            <hr
              role="presentation"
              class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
            ></hr>

            <p
              data-slot="text"
              class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              Imperdiet donec eget curae adipiscing aenean. Sit elementum
              eleifend pharetra lectus himenaeos torquent pellentesque erat.
              Odio dui class porta blandit laoreet eu aenean. Suscipit tempus
              lectus natoque nam varius. Consectetur litora iaculis auctor
              faucibus sagittis dis morbi venenatis sodales. Neque semper leo
              pulvinar ex mauris aptent mi porttitor. Duis natoque posuere,
              ultricies per faucibus fusce gravida quis. Curabitur sodales
              dignissim porta; neque platea vitae. Congue mauris curabitur
              suscipit venenatis placerat dapibus habitasse curabitur sapien.{" "}
            </p>

            <p
              data-slot="text"
              class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400 mt-10 "
            >
              Imperdiet donec eget curae adipiscing aenean. Sit elementum
              eleifend pharetra lectus himenaeos torquent pellentesque erat.
              Odio dui class porta blandit laoreet eu aenean. Suscipit tempus
              lectus natoque nam varius. Consectetur litora iaculis auctor
              faucibus sagittis dis morbi venenatis sodales. Neque semper leo
              pulvinar ex mauris aptent mi porttitor. Duis natoque posuere,
              ultricies per faucibus fusce gravida quis. Curabitur sodales
              dignissim porta; neque platea vitae. Congue mauris curabitur
              suscipit venenatis placerat dapibus habitasse curabitur sapien.{" "}
            </p>
          </form>
        </div>
      </div>
    </SidebarLayout>
  );
}
