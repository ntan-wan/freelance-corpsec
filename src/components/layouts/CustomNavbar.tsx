import { CustomButton } from "@/components/ui/CustomButton";

export function CustomNavbar() {
  const menuItems = [{ label: "Home" }, { label: "Features" }, { label: "About us" }, { label: "News" }, { label: "Contact" }];

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
		<span className="c-logo">Logo</span>
		<span>Whitespace UI</span>
	  </div>

      <ul className="flex items-center gap-4">
        {menuItems.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
		<li><CustomButton label="Start Now" /></li>
      </ul>
    </nav>
  );
}
