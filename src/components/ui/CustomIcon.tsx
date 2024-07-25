import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";

type IProps = {
  //# eg: BeakerIcon
  name: keyof typeof HeroIcon;
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;

export function CustomIcon({ name, ...props }: IProps) {
  const IconComponent = HeroIcon[name];
  return <IconComponent {...props} className="size-6 text-blue-500" />;
}
