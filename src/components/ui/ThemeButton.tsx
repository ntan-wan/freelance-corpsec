"use client";

import { CustomButton } from "@/components/ui/CustomButton";
import { useEffect, useState } from "react";
import { Theme } from "@/types/coreTypes";

export function ThemeButton() {
    const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		if (localStorage.getItem('theme') == 'dark') {
        	document.documentElement.classList.add('dark');
			setTheme('dark');
		}
	}, []);
    const handleClickTheme = () => {
		if (theme == 'light') {
        	document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		} else if (theme == 'dark') {
        	document.documentElement.classList.remove('dark');
			localStorage.removeItem('theme');
			setTheme('light');
		}
    };

    return <CustomButton icon={theme == "light" ? "SunIcon" : "MoonIcon"} onClick={() => handleClickTheme()} />;
}
