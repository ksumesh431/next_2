// "use client"

// import * as React from "react"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"

// export function ModeToggle() {
//     const { theme, setTheme } = useTheme()

//     // Toggle function to switch between light and dark themes
//     const toggleTheme = () => {
//         if (theme === "dark") {
//             setTheme("light")
//         } else {
//             setTheme("dark")
//         }
//     }

//     return (
//         <Button variant="outline" size="icon" onClick={toggleTheme}>
//             <SunIcon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "hidden" : "block"}`} />
//             <MoonIcon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "block" : "hidden"}`} />
//             <span className="sr-only">Toggle theme</span>
//         </Button>
//     )
// }


"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <SunIcon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "hidden" : "block"}`} />
            <MoonIcon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "block" : "hidden"}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}