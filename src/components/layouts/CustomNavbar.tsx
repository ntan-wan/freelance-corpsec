"use client";

import { CustomButton } from "@/components/ui/CustomButton";
import { cn } from "@/utils/coreUtils";
import { useGlobal } from "@/providers/GlobalProvider";
import { ThemeButton } from "@/components/ui/ThemeButton";

interface IProps {
  sticky?: boolean;
  className?: string;
}

export function CustomNavbar({ sticky = true, className }: IProps) {
  const menuItems = [{ label: "Home" }, { label: "Features" }, { label: "About us" }, { label: "News" }, { label: "Contact" }];
  const style = {
    base: "flex items-center justify-between p-4 bg-white border-b border-b-gray-200 c-darkmode dark:border-b-gray-700",
    sticky: "sticky top-0 w-full z-10",
  };
  const {globalState, setState} : {[key : string] : any} = useGlobal();

  return (
      <nav className={cn(style.base, sticky && style.sticky, className)}>
          <div className="flex items-center gap-4">
              <span className="c-logo">Logo</span>
              <span className="hidden lg:inline">Whitespace UI</span>
          </div>

          <ul className="flex items-center gap-4">
              {menuItems.map((item) => (
                  <li className="hidden lg:block" key={item.label}>
                      {item.label}
                  </li>
              ))}
				<li>
					<ThemeButton />
				</li>
              <li>
                  <CustomButton label="Start Now" />
              </li>
              <li className="lg:hidden">
                  <CustomButton
                      icon="Bars3Icon"
                      className="p-1"
                      onClick={() => {
                          setState({ sidebarIsOpen: !globalState.sidebarIsOpen });
                      }}
                  />
              </li>
          </ul>
      </nav>
  );
}
