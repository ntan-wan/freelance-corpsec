"use client";

import { cn } from "@/utils/coreUtils";
import { CustomOverlay } from "@/components/ui/CustomOverlay";
import { useGlobal } from "@/providers/GlobalProvider";
import { CustomButton } from "@/components/ui/CustomButton";
import Link from "next/link";

interface IProps {
  position?: "left" | "right";
  isOpen?: boolean;
  title?: string;
}

function getOpenStyle(pos: "left" | "right") {
  switch (pos) {
	case "left":
	  return "translate-x-0";
	case "right":
	  return "translate-y-0";
	default:
	  return "translate-x-0";
  }
}

function getCloseStyle(pos: "left" | "right") {
  switch (pos) {
	case "left":
	  return "translate-x-[-999px]";
	case "right":
	  return "translate-x-[999px]";
	default:
	  return "translate-x-[-999px]";
  }

}

export function CustomSidebar({ position = "left", isOpen = false, title = "Menu", ...props }: IProps) {
  const { globalState, setState }: { [key: string]: any } = useGlobal();

  const styles = {
    base: "w-[278px] bg-white text-gray-800 h-full fixed z-20 transition-all duration-300",
  };
  const sidebarClassArgs = [
    styles.base,
    position === "left" ? "left-0" : "right-0",
    globalState.sidebarIsOpen ? getOpenStyle(position) : getCloseStyle(position),
  ];

  const items = [{ label: "Home" }, { label: "Features" }, { label: "About us" }, { label: "News" }, { label: "Contact" }];

  return (
    <>
      {globalState.sidebarIsOpen && <CustomOverlay />}
      <nav className={cn(...sidebarClassArgs)}>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-xl font-medium">{title}</span>
          <CustomButton icon="XMarkIcon" onClick={() => setState({ sidebarIsOpen: false })} />
        </div>

        <ul className="px-4">
          {items.map((item) => (
            <li key={item.label} className="text-gray-900">
              <Link className="block w-full px-2 py-2 hover:bg-primary-50 transition-colors" href="/">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
