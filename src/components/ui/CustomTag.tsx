import { cn } from "@/utils/coreUtils";

interface IProps {
  label: string;
  variant?: string;
}

const styles : {[key : string] : string} = {
  base: "p-1 rounded-md border border-gray-300 text-sm",
  primary: 'bg-primary-100 border-primary-100 text-primary-600',
  success: 'bg-green-100 border-green-100 text-green-600',
};

export function CustomTag({ label = "Tag", variant = 'primary' }: IProps) {
  return <span className={cn(styles.base, styles[variant])}>{label}</span>;
}
