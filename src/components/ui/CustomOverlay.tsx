import { useState } from "react"
import { cn } from "@/utils/coreUtils"
import { useEffect } from "react"

export function CustomOverlay() {
	
	const [isOpen, setIsOpen] = useState(false)
	const styles = {
		base: "w-full h-full fixed inset-0 bg-black opacity-0 z-10 transition-opacity duration-300",
	}
	const overlayClassArgs = [styles.base, isOpen && "opacity-50 pointer-events-none" ];

	useEffect(() => {
		setIsOpen(true);

		//# unmount
		return () => {
			setIsOpen(false);
		}
	}, [])

	return (
		<div className={cn(...overlayClassArgs)}></div>
	)
}