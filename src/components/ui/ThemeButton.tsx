"use client";

import { CustomButton } from "@/components/ui/CustomButton";
import { useState } from "react";
import { Theme } from "@/types/coreTypes";

export function ThemeButton() {
    const [theme, setTheme] = useState<Theme>("light");
    const handleClickTheme = () => {
		if (theme == 'light') {
        	document.documentElement.classList.add('dark');
			setTheme('dark');
		} else if (theme == 'dark') {
        	document.documentElement.classList.remove('dark');
			setTheme('light');
		}
    };

    return <CustomButton icon={theme == "light" ? "SunIcon" : "MoonIcon"} onClick={() => handleClickTheme()} />;
}
