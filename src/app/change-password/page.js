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
      <div class="grow ">
        <div class="mx-auto max-w-6xl">
          <form method="post" class="mx-auto max-w-4xl">
            <h1 class="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
              Change Password
            </h1>
            <hr
              role="presentation"
              class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
            ></hr>

            <section class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <div class="space-y-1">
                {/* <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
                  Old Password
                </h2> */}
                <p
                  data-slot="text"
                  class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
                >
                  Old password
                </p>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <span
                  data-slot="control"
                  class="col-span-2 relative block w-full"
                >
                  <input
                    aria-label="Street Address"
                    placeholder="Street Address"
                    class="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
                    id="headlessui-input-:ref:"
                    data-headlessui-state=""
                    value="Shortlands"
                    name="address"
                    type="password"
                  ></input>
                </span>
              </div>

              <div class="space-y-1">
                {/* <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
                  Old Password
                </h2> */}
                <p
                  data-slot="text"
                  class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
                >
                  New password
                </p>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <span
                  data-slot="control"
                  class="col-span-2 relative block w-full"
                >
                  <input
                    aria-label="Street Address"
                    placeholder="Street Address"
                    class="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
                    id="headlessui-input-:ref:"
                    data-headlessui-state=""
                    value="Shortlands"
                    name="address"
                    type="password"

                  ></input>
                </span>
              </div>
            </section>

            <hr
              role="presentation"
              class="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
            ></hr>

            <div class="flex justify-end gap-4">
              <Link href="/">
                <button
                  type="submit"
                  class="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default"
                  data-headlessui-state=""
                >
                  <span
                    class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  Confirm
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </SidebarLayout>
  );
}
