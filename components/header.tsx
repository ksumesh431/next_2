// import {
//     Menubar,
//     MenubarMenu,
//     MenubarTrigger,
// } from "@/components/ui/menubar"
// import { ModeToggle } from "./theme-button"

// const CustomHeader = () => {
//     return (
//         <div className="sticky  top-0 debug-border">
//             <Menubar>
//                 <MenubarMenu>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>
//                     <MenubarTrigger>File</MenubarTrigger>

//                     {/* Dark mode toggle */}
//                     <ModeToggle /> 
//                 </MenubarMenu>
//             </Menubar>

//         </div>
//     )
// }

// export default CustomHeader


// "use client"

// import { useState, useEffect } from "react"
// import {
//   Menubar,
//   MenubarMenu,
//   MenubarTrigger,
//   MenubarContent,
//   MenubarItem,
// } from "@/components/ui/menubar"
// import { ModeToggle } from "./theme-button"
// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"

// const menuItems = [
//   "File",
//   "Edit",
//   "View",
//   "Format",
//   "Tools",
//   "Window",
//   "Help"
// ]

// export default function CustomHeader() {
//   const [isDropdown, setIsDropdown] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDropdown(window.innerWidth < 768) // Change to dropdown on screens smaller than 768px
//     }

//     handleResize() // Check on initial render
//     window.addEventListener('resize', handleResize)

//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <Menubar className="border-none">
//           <MenubarMenu>
//             {isDropdown ? (
//               <MenubarTrigger>
//                 <Button variant="outline">
//                   Menu <ChevronDown className="ml-2 h-4 w-4" />
//                 </Button>
//                 <MenubarContent>
//                   {menuItems.map((item, index) => (
//                     <MenubarItem key={index}>{item}</MenubarItem>
//                   ))}
//                 </MenubarContent>
//               </MenubarTrigger>
//             ) : (
//               menuItems.map((item, index) => (
//                 <MenubarTrigger key={index}>{item}</MenubarTrigger>
//               ))
//             )}
//             <ModeToggle />
//           </MenubarMenu>
//         </Menubar>
//       </div>
//     </header>
//   )
// }


"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./theme-button"


const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export default function CustomHeader() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center min-w-full">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            My Website
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-foreground/80 text-foreground"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <MobileNav items={navItems} setIsOpen={setIsOpen} />
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end mr-2 ">
                    <div className="flex w-full justify-end md:w-auto md:flex-none">
                        <ModeToggle />

                    </div>
                </div>
            </div>
        </header>
    )
}

function MobileNav({ items, setIsOpen }: { items: { name: string; href: string }[], setIsOpen: (open: boolean) => void }) {
    return (
        <div className="flex flex-col space-y-3">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}