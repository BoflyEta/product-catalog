"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, CircleUser, Mail, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="font-bold text-2xl">
          MyStore
        </Link>

        <Link href="#" className="hidden md:flex ms-6 me-4" >
          Kategori
        </Link>

        <Input
          className="hidden md:flex mx-4"
          type="text"
          placeholder="Search"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <Link
                  href="/products"
                  className="text-sm hover:text-primary transition"
                >
                  <ShoppingCart />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/products"
                  className="text-sm hover:text-primary transition"
                >
                  <Bell />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/products"
                  className="text-sm hover:text-primary transition"
                >
                  <Mail />
                </Link>
              </NavigationMenuItem>
              <div className="h-6 w-[1px] bg-gray-300"></div>
              <NavigationMenuItem>
                <Link
                  href="/products"
                  className="flex items-center gap-2 text-sm hover:text-primary transition"
                >
                  <CircleUser />
                  User
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-6">
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
