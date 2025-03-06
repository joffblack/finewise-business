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
          <SidebarLabel>
            <Link href="/">Dashboard</Link>
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
            <Link href="/tickets">Tickets</Link>
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
        <SidebarItem href="/events/1">X181 PAJ - ticket</SidebarItem>
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
