import { CustomButton } from "@/components/ui/CustomButton";
import { cn } from "@/utils/coreUtils";

interface IProps {
  sticky?: boolean;
  className?: string;
}

const style = {
  base: "flex items-center justify-between p-4 bg-white",
  sticky: 'sticky top-0 w-full z-10',
};

export function CustomNavbar({ sticky = true, className }: IProps) {
  const menuItems = [{ label: "Home" }, { label: "Features" }, { label: "About us" }, { label: "News" }, { label: "Contact" }];

  return (
    <nav className={cn(style.base, sticky && style.sticky, className)}>
      <div className="flex items-center gap-4">
        <span className="c-logo">Logo</span>
        <span>Whitespace UI</span>
      </div>

      <ul className="flex items-center gap-4">
        {menuItems.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
        <li>
          <CustomButton label="Start Now" />
        </li>
      </ul>
    </nav>
  );
}
