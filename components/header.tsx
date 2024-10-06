"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

// import { ModeToggle } from "./theme-button"

const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Contacts", href: "/contacts" },
]

export default function StickyHeader() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full  border-b border-blue-900 bg-custom-bg text-white">
            <div className="container flex flex-col md:flex-row md:h-14 items-center justify-center px-4 py-2 md:py-0">
                <Link href="/" className="flex items-center space-x-2 mb-2 md:mb-0 md:mr-4 ">
                    <img src="/next_2/logo.png" alt="Logo" className="h-14 w-auto mr-5" />
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-blue-200 text-blue-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            className="px-4 py-2 text-base bg-blue-100 hover:bg-blue-200 focus-visible:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-400 md:hidden text-custom-bg font-medium border-2 border-blue-300 transition-colors duration-200 w-60 mx-auto mb-4 "
                        >
                            <Menu className="h-6 w-6 mr-2" />
                            <span>Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0 bg-blue-950 text-blue-100 border-blue-900">
                        <MobileNav items={navItems} setIsOpen={setIsOpen} />
                    </SheetContent>
                </Sheet>
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
                    className="text-blue-200 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

{/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
<div className="flex w-full justify-end md:w-auto md:flex-none">

    <ModeToggle />

</div>
</div> */}