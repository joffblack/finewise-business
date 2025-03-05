import {
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "../../components/Sidebar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "../../components/dropdown";
import { Avatar } from "../../components/avatar";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

function FWsidebarHeader() {
  return (
    <SidebarHeader>
      <Dropdown>
        <DropdownButton as={SidebarItem} className="lg:mb-2.5">
          <Image
            src={"/finewise-logo-dark.png"}
            alt={"finewise-log"}
            width="24"
            height="24"
          />
          <SidebarLabel>FineWise</SidebarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
          <DropdownItem href="/teams/1/settings">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/1">
            <Avatar slot="icon" src="/tailwind-logo.svg" />
            <DropdownLabel>Tailwind Labs</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="/teams/2">
            <Avatar
              slot="icon"
              initials="WC"
              className="bg-purple-500 text-white"
            />
            <DropdownLabel>Workcation</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/create">
            <PlusIcon />
            <DropdownLabel>New team&hellip;</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </SidebarHeader>
  );
}

export default FWsidebarHeader;
