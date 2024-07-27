import { cn } from "@/utils/coreUtils";
import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";

type IProps = {
  //# eg: BeakerIcon
  name: keyof typeof HeroIcon;
  className?: string
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;

const styles = {
	base: 'size-6 text-blue-500'
}

export function CustomIcon({ name, className, ...props }: IProps) {
  const IconComponent = HeroIcon[name];
  return <IconComponent {...props} className={cn(styles.base, className)} />;
}
