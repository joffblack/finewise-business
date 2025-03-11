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
        <SidebarItem href="/">
          <HomeIcon />
          <SidebarLabel>
            <Link href="/">Dashboard</Link>
          </SidebarLabel>
        </SidebarItem>
        <SidebarItem>
          <TicketIcon />
          <SidebarLabel>
            <Link href="/tickets">Tickets</Link>
          </SidebarLabel>
        </SidebarItem>
        <SidebarItem>
          <Square2StackIcon />
          <SidebarLabel>
            <Link href="/vehicles">Vehicles</Link>
          </SidebarLabel>
        </SidebarItem>

        <SidebarItem>
          <TicketIcon />
          <SidebarLabel>
            <Link href="/drivers">Drivers</Link>
          </SidebarLabel>
        </SidebarItem>
        <SidebarItem>
          <Cog6ToothIcon />
          <SidebarLabel>
            <Link href="/settings">Settings</Link>
          </SidebarLabel>
        </SidebarItem>
      </SidebarSection>
      <SidebarSection className="max-lg:hidden">
        <SidebarHeading>Notifications</SidebarHeading>
        <SidebarItem href="/">Bromley borough added</SidebarItem>
        <SidebarItem href="/">New FineWise message</SidebarItem>
        <SidebarItem href="/">Greenwich borough added</SidebarItem>
        <SidebarItem href="/">Appeal #302 accepted</SidebarItem>
        {/* <SidebarItem href="/events/4">Important message</SidebarItem> */}
      </SidebarSection>
      <SidebarSpacer />
      <SidebarSection>
        <SidebarItem href="/">
          <QuestionMarkCircleIcon />
          <SidebarLabel>Support</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/">
          <SparklesIcon />
          <SidebarLabel>What&apos;s Changed</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
    </SidebarBody>
  );
}
