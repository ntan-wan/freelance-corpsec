import { cn } from "@/utils/coreUtils";
import { CustomFAIcon } from "@/components/ui/CustomFAIcon";
import { FABrandIcons } from "@/types/coreTypes";
import { CustomDivider } from "@/components/ui/CustomDivider";
interface IProps {
  className?: string;
}

export function CustomFooter({ className }: IProps) {
  const products = [{ label: "Pricing" }, { label: "Case Studies" }, { label: "Features" }, { label: "Reviews" }, { label: "Updates" }];
  const company = [{ label: "About" }, { label: "Careers" }, { label: "News" }, { label: "Blog" }, { label: "Contact" }];
  const support = [{ label: "Help Center" }, { label: "Status" }, { label: "Report a Bug" }, { label: "Chat Support" }];
  const contact = [{ label: "hello@whitespaceui.design" }, { label: "+1(500)300 250" }, { label: "3891 Ranchiew Dr.Richardson, CA 62639" }];
  const logos = [
    { label: "Instagram", icon: "faInstagram" },
    { label: "Facebook", icon: "faFacebook" },
    { label: "Twitter", icon: "faTwitter" },
    { label: "Linkedin", icon: "faLinkedin" },
  ];

  return (
    <footer className={cn("p-4", className)}>
      <div className="px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6">
          <p className="flex items-center gap-2">
            <span className="c-logo">Logo</span>
            <span>Whitespace UI</span>
          </p>
          <p className="text-base c-text-gray">
            We love working with ambitious people. <br /> Let&apos;s build something great together now.
          </p>
          <div className="flex items-center gap-4">
            {logos.map((item) => (
              <CustomFAIcon key={item.label} name={item.icon as FABrandIcons} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-12 lg:gap-28">
          <ul className="flex flex-col gap-4">
            <li className="c-paragraph">Products</li>
            {products.map((item) => (
              <li className="text-base c-text-gray" key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="c-paragraph">Company</li>
            {company.map((item) => (
              <li className="text-base c-text-gray" key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="c-paragraph">Support</li>
            {support.map((item) => (
              <li className="text-base c-text-gray" key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="c-paragraph">Contact Us</li>
            {contact.map((item) => (
              <li className="text-base c-text-gray" key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

	  <CustomDivider />

	  <div className="px-8 flex items-center justify-between">
			<div>&copy;2024 All rights reserved</div>
			<div>Term of Service | Privacy Policy</div>
	  </div>
    </footer>
  );
}
