import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FAIcons from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FABrandIcons } from "@/types/coreTypes";

interface IProps {
	//# eg: 'faFacebook'
  	name: FABrandIcons;
}

export function CustomFAIcon({ name, ...props }: IProps) {
  const icon = FAIcons[name] as IconProp;

  return <FontAwesomeIcon icon={icon} className="size-6"/>
}
