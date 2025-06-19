import { NAV_ITEMS } from "@/core/config/constants";
import { NavItemType } from "@/core/types/navbar.type";
import { usePathname } from "next/navigation";




function findBreadcrumbTrail(path: string, navItems: NavItemType[]): NavItemType[] | null {
    for (const item of navItems) {
        if (item.url === path) return [item];
        if (item.items) {
            const childTrail = findBreadcrumbTrail(path, item.items);
            if (childTrail) return [item, ...childTrail];
        }
    }
    return null;
}

export function useBreadcrumbs() {
    const pathname = usePathname();
    const trail = findBreadcrumbTrail(pathname, NAV_ITEMS);
    return trail ?? [];
}
