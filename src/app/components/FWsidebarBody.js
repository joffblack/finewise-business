"use client";
import {
  SidebarBody,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../../components/sidebar";
import {
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function FWsidebarBody() {
  return (
    <SidebarBody>
      <SidebarSection>
        <SidebarItem href="/dashboard">
          <HomeIcon />
          <SidebarLabel>
            <Link href="/dashboard" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Dashboard</Link>
          </SidebarLabel>
        </SidebarItem>

        <SidebarItem href="/tickets">
          <TicketIcon />
          <SidebarLabel>
            <Link href="/tickets" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Tickets</Link>
          </SidebarLabel>
        </SidebarItem>

        <SidebarItem href="/vehicles">
          <Square2StackIcon />
          <SidebarLabel>
            <Link href="/vehicles" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Vehicles</Link>
          </SidebarLabel>
        </SidebarItem>

        <SidebarItem href="/drivers">
          <TicketIcon />
          <SidebarLabel>
            <Link href="/drivers" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Drivers</Link>
          </SidebarLabel>
        </SidebarItem>
      </SidebarSection>
      <SidebarSection className="max-lg:hidden">
        <SidebarHeading >Latest News</SidebarHeading>
        <SidebarItem href="/latest-news-bromley" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Bromley borough added</SidebarItem>
        <SidebarItem href="/latest-news-finewise" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">New FineWise message</SidebarItem>
        <SidebarItem href="/latest-news-greenwich" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Greenwich borough added</SidebarItem>
        <SidebarItem href="/latest-news-appeal" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Appeal #302 accepted</SidebarItem>
        {/* <SidebarItem href="/events/4">Important message</SidebarItem> */}
      </SidebarSection>
      <SidebarSpacer />
      <SidebarSection>
        <SidebarItem href="/settings">
          <Cog6ToothIcon />
          <SidebarLabel>
            <Link href="/settings" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Settings</Link>
          </SidebarLabel>
        </SidebarItem>

        <SidebarItem href="/support">
          <QuestionMarkCircleIcon />
          <SidebarLabel className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">Support</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/whats-changed" className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">
          <SparklesIcon />
          <SidebarLabel className="xl:text-white lg:text-white  @media (width <= 48rem) { text-black }">What&apos;s Changed</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
    </SidebarBody>
  );
}
