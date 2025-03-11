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
      <div className="flex items-end justify-between">
        <h2 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white mt-1">
          What's Changed
        </h2>
      </div>

      <hr
        role="presentation"
        class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
      ></hr>

      <section class="grid gap-x-8 gap-y-6 sm:grid-cols-1">
        <div class="space-y-1">
          <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            25th Jan 25
          </h2>
          <p
            data-slot="text"
            class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
          >
            Lorem ipsum odor amet, consectetuer adipiscing elit. Eu vitae
            inceptos vulputate facilisi nulla et pulvinar. Aptent efficitur ex
            convallis vivamus donec tortor. Tristique lobortis scelerisque augue
            dapibus felis montes bibendum. Massa cras natoque euismod maximus
            orci id lacus. Nostra dignissim sapien sociosqu iaculis lacus nibh
            quam. Et litora facilisi molestie taciti morbi nostra aliquet
            sagittis himenaeos. Nibh placerat dictum velit iaculis, platea at
            nulla.
          </p>
        </div>
      </section>

      <hr
        role="presentation"
        class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
      ></hr>

      <section class="grid gap-x-8 gap-y-6 sm:grid-cols-1">
        <div class="space-y-1">
          <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            15th Feb 25
          </h2>
          <p
            data-slot="text"
            class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
          >
            Imperdiet donec eget curae adipiscing aenean. Sit elementum eleifend
            pharetra lectus himenaeos torquent pellentesque erat. Odio dui class
            porta blandit laoreet eu aenean. Suscipit tempus lectus natoque nam
            varius. Consectetur litora iaculis auctor faucibus sagittis dis
            morbi venenatis sodales. Neque semper leo pulvinar ex mauris aptent
            mi porttitor. Duis natoque posuere, ultricies per faucibus fusce
            gravida quis. Curabitur sodales dignissim porta; neque platea vitae.
            Congue mauris curabitur suscipit venenatis placerat dapibus
            habitasse curabitur sapien.{" "}
          </p>
        </div>
      </section>

      <hr
        role="presentation"
        class="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
      ></hr>

      <section class="grid gap-x-8 gap-y-6 sm:grid-cols-1">
        <div class="space-y-1">
          <h2 class="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            20th Mar 25
          </h2>
          <p
            data-slot="text"
            class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
          >
            Imperdiet donec eget curae adipiscing aenean. Sit elementum eleifend
            pharetra lectus himenaeos torquent pellentesque erat. Odio dui class
            porta blandit laoreet eu aenean. Suscipit tempus lectus natoque nam
            varius. Consectetur litora iaculis auctor faucibus sagittis dis
            morbi venenatis sodales. Neque semper leo pulvinar ex mauris aptent
            mi porttitor. Duis natoque posuere, ultricies per faucibus fusce
            gravida quis. Curabitur sodales dignissim porta; neque platea vitae.
            Congue mauris curabitur suscipit venenatis placerat dapibus
            habitasse curabitur sapien.{" "}
          </p>
        </div>
      </section>
    </SidebarLayout>
  );
}
