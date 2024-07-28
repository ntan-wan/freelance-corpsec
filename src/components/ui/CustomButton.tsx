import { cn } from "@/utils/coreUtils";
import { CustomIcon } from "@/components/ui/CustomIcon";
import { HeroIcons } from "@/types/coreTypes";
import { IComponentVariant } from "@/types/coreTypes";

interface IProps {
  label?: string;
  className?: string;
  variant?: string;
  icon?: HeroIcons;
  iconClassName?: string;
  onClick?: () => void;
}

const styles: IComponentVariant = {
  base: "p-3 py-2 rounded-md border bg-primary-500 border-primary-500 text-white",
  default: "",
  outlined: "bg-transparent text-primary-500",
};

const iconStyles: IComponentVariant = {
  base: "",
  default: "",
  outlined: "text-primary-500",
};

export function CustomButton({ label, className, iconClassName, variant = "default", icon, ...props }: IProps) {
  const buttonClassArgs = [styles.base, !label && "bg-transparent border-transparent", styles[variant as keyof IComponentVariant], className];
  const iconClassArgs = ["text-white", !label && "text-primary-500", iconStyles[variant as keyof IComponentVariant], iconClassName];

  const renderView = () => {
    return (
      <div className={cn("flex items-center justify-center gap-3")}>
        {icon && <CustomIcon name={icon} className={cn(...iconClassArgs)} />}
        {label && <span>{label}</span>}
      </div>
    );
  };

  return (
    <button className={cn(...buttonClassArgs)} {...props}>
      {renderView()}
    </button>
  );
}
