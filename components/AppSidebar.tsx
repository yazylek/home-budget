"use client";

import {
  ChartColumnIncreasing,
  ChartPie,
  CreditCard,
  Goal,
  Home,
  House,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Separator } from "./ui/separator";
import { useAuth } from "@/lib/context/AuthProvider";
import { usePathname } from "next/navigation";
import { Menubar, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { MenubarContent } from "@radix-ui/react-menubar";


const appName = process.env.PUBLIC_NEXT_APP_NAME || "HomeBudget";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: House,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: ChartPie,
  },
  {
    title: "Goals",
    url: "/goals",
    icon: Goal,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ChartColumnIncreasing,
  },
];

export function AppSidebar() {
  const path = usePathname()
  const { logout } = useAuth();


  return (
    <Sidebar collapsible="icon" className="xl:flex z-50 ml-4 h-[95%] mt-4 rounded-2xl bg-[#F8F8F8]  overflow-hidden">
      <SidebarHeader className="text-xl font-semibold flex flex-row items-center justify-center gap-1 h-16 bg-[#F8F8F8] ">
        <Home size={16} />
        {appName}
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-[#F8F8F8]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = path.startsWith(item.url)
                return(

                  <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`mb-2 ${isActive ? "bg-[#ececec]" : ''}`}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" bg-[#F8F8F8]">
        
          <Menubar className="p-6">
            <MenubarMenu>
              <Avatar>
                <AvatarImage src="avatar.webp"/>
              </Avatar>
              <MenubarTrigger className="cursor-pointer">
                <div  className="flex flex-col">
                <p>Jan Kowalski ^</p>
                <p className="text-neutral-400 text-xs font-light">jankowalski@gmail.com</p>
                </div>
              </MenubarTrigger>
              
              <MenubarContent className="bg-white rounded-md w-full min-w-[160px] pb-1">
          <MenubarItem className="w-full text-left px-4 py-2 hover:bg-[#e6f0ff] cursor-pointer">
            <SettingsIcon/>
            Settings 
          </MenubarItem>
          <MenubarItem className="w-full text-left px-4 py-2 hover:bg-[#e6f0ff] cursor-pointer">
            <LogOutIcon/>
            Logout
          </MenubarItem>
          </MenubarContent>
            </MenubarMenu>
          </Menubar>
        
      </SidebarFooter>
    </Sidebar>
  );
}
