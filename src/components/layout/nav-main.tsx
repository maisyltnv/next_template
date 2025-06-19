"use client"

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavItemType } from "@/core/types/navbar.type"
import Link from "next/link"
import { useState } from "react"
import { NAV_ITEMS } from "@/core/config/constants"

export function NavMain() {
  const [menuItems, setMenuItems] = useState<NavItemType[]>(NAV_ITEMS)

  const toggleItem = (index: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          const isActive = !!item.isActive;
          return { ...item, isActive: !isActive };
        }
        return item;
      })
    );
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {menuItems.map((item, index) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            open={item.isActive}
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} onClick={() => {
                toggleItem(index);
              }}>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90" onClick={() => {
                      toggleItem(index);
                    }}>
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
