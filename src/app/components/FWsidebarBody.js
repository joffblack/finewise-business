import {
  SidebarBody,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../../components/Sidebar";
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
          <SidebarLabel>Home</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/events">
          <Square2StackIcon />
          <SidebarLabel>
            <Link href="/dashboard">Dashboard</Link>
          </SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/events">
          <Square2StackIcon />
          <SidebarLabel>Events</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/orders">
          <TicketIcon />
          <SidebarLabel>Orders</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/settings">
          <Cog6ToothIcon />
          <SidebarLabel>Settings</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/broadcasts">
          <MegaphoneIcon />
          <SidebarLabel>Broadcasts</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
      <SidebarSection className="max-lg:hidden">
        <SidebarHeading>Upcoming Events</SidebarHeading>
        <SidebarItem href="/events/1">Bear Hug: Live in Concert</SidebarItem>
        <SidebarItem href="/events/2">Viking People</SidebarItem>
        <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
        <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
      </SidebarSection>
      <SidebarSpacer />
      <SidebarSection>
        <SidebarItem href="/support">
          <QuestionMarkCircleIcon />
          <SidebarLabel>Support</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/changelog">
          <SparklesIcon />
          <SidebarLabel>Changelog</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
    </SidebarBody>
  );
}
