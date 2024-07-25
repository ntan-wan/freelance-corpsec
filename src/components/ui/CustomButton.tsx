import { cn } from "@/utils/coreUtils";

interface IProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const styles = {
  base: "p-3 py-2 rounded-md border bg-blue-500 border-blue-500 text-white",
};

export function CustomButton({ label, className, ...props }: IProps) {
  return <button className={cn(styles.base, className)} {...props} >{label}</button>;
}
