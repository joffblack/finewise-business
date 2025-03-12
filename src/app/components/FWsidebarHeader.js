import {
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "../../components/sidebar";
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

// does this push to guthub

function FWsidebarHeader() {
  return (
    <SidebarHeader>
      <Dropdown>
        <DropdownButton as={SidebarItem} className="lg:mb-2.5">
          <Image
            src={"/finewise-logo.png"}
            alt={"finewise-log"}
            width="24"
            height="24"
          />
          <SidebarLabel >FineWise</SidebarLabel>
        </DropdownButton>
      </Dropdown>
    </SidebarHeader>
  );
}

export default FWsidebarHeader;
