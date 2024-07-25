import { cn } from "@/utils/coreUtils"

interface IProps {
	className?: string
	placeholder?: string
}

const styles = {
	base : 'p-3 py-2 rounded-md border border-gray-200'
}

export function CustomInput({ className, placeholder }: IProps) {
	return (
		<input placeholder={placeholder} className={cn(styles.base, className)}/>
	)
}