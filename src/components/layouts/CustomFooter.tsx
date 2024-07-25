import { cn } from "@/utils/coreUtils";
import { CustomFAIcon } from "@/components/ui/CustomFAIcon";
import { FABrandIcons } from "@/types/coreTypes";

interface IProps {
  className?: string;
}

export function CustomFooter({ className }: IProps) {
  const products = [{ label: "Pricing" }, { label: "Case Studies" }, { label: "Features" }, { label: "Reviews" }, { label: "Updates" }];
  const company = [{ label: "About" }, { label: "Careers" }, { label: "News" }, { label: "Blog" }, { label: "Contact" }];
  const support = [{ label: "Help Center" }, { label: "Status" }, { label: "Report a Bug" }, { label: "Chat Support" }];
  const contact = [{ label: "hello@whitespaceui.design" }, { label: "+1(500)300 250" }, { label: "3891 Ranchiew Dr.Richardson, CA 62639" }];
  const logos = [{label:'Instagram', icon: 'faInstagram'}, {label:'Facebook', icon: 'faFacebook'}, {label:'Twitter', icon: 'faTwitter'}, {label:'Linkedin', icon: 'faLinkedin'}];

  return (
    <footer className={cn("flex items-center justify-between p-4", className)}>
      <div className="flex flex-col gap-6">
        <p className="flex items-center gap-2">
          <span className="c-logo">
				Logo
          </span>
          <span>Whitespace UI</span>
        </p>
        <p className="c-text-sm c-text-gray">
          We love working with ambitious people. <br /> Let&apos;s build something great together now.
        </p>
        <div className="flex items-center gap-4">
			{logos.map((item) => (
				<CustomFAIcon key={item.label} name={item.icon as FABrandIcons} />
			))}
		</div>
      </div>

      <div className="flex gap-28">
        <ul className="flex flex-col gap-4">
          <li>Products</li>
          {products.map((item) => (
            <li className="c-text-sm c-text-gray" key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          <li>Company</li>
          {company.map((item) => (
            <li className="c-text-sm c-text-gray" key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          <li>Support</li>
          {support.map((item) => (
            <li className="c-text-sm c-text-gray" key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          <li>Contact Us</li>
          {contact.map((item) => (
            <li className="c-text-sm c-text-gray" key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
