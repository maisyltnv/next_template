import {
    ChartPie,
    Factory,
    FileText,
    Settings2,
    ShoppingCart,
    Warehouse,
} from "lucide-react"
import { NavItemType } from "../types/navbar.type";

export const API_ENDPOINTS = {
    ADMIN: {
        TODO: {
            GET_ALL_TODOS: "/todos",
        },
    },
    USER: {
        LOAN: {
            LOAN_TYPE: "/customer/public/loan/types",
            LOAN: "/customer/public/loan",
        },
    },
};

// Local Storage Keys
export const STORAGE_KEYS = {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
} as const;

// Application Routes
export const ROUTES = {
    PUBLIC: {
        HOME: '/',
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    PRIVATE: {
        DASHBOARD: '/admin/dashboard',
        PROFILE: '/admin/profile',
        // REPORTS
        REPORTS: '/admin/reports',
        REPORTS_INVENTORY: '/admin/reports/inventory',
        REPORTS_PURCHASING: '/admin/reports/purchasing',
        REPORTS_MANUFACTURING: '/admin/reports/manufacturing',
        REPORTS_CUSTOM: '/admin/reports/custom',
        // SETTINGS
        SETTINGS: '/admin/settings',
        SETTINGS_GENERAL: '/admin/settings/general',
        SETTINGS_USERS: '/admin/settings/users',
        SETTINGS_NOTIFICATIONS: '/admin/settings/notifications',
        SETTINGS_API: '/admin/settings/api',
    },
} as const;

// Form Validation Constants
export const VALIDATION = {
    PASSWORD: {
        MIN_LENGTH: 8,
        MAX_LENGTH: 32,
        REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        MESSAGE: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
    EMAIL: {
        REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        MESSAGE: 'Please enter a valid email address',
    },
} as const;

export const NAV_ITEMS: NavItemType[] = [
    {
        title: "Dashboard",
        url: ROUTES.PRIVATE.DASHBOARD,
        icon: ChartPie,
        isActive: true,
    },
    {
        title: "Reports",
        url: ROUTES.PRIVATE.REPORTS,
        icon: FileText,
        isActive: true,
        items: [
            {
                title: "Inventory Reports",
                url: "#",
            },
            {
                title: "Purchasing Reports",
                url: "#",
            },
            {
                title: "Manufacturing Reports",
                url: "#",
            },
            {
                title: "Custom Reports",
                url: "#",
            },
        ],
    },
    {
        title: "Settings",
        url: ROUTES.PRIVATE.SETTINGS,
        icon: Settings2,
        isActive: false,
        items: [
            {
                title: "General",
                url: ROUTES.PRIVATE.SETTINGS_GENERAL,
            },
            {
                title: "Users & Roles",
                url: ROUTES.PRIVATE.SETTINGS_USERS,
            },
            {
                title: "Notifications",
                url: ROUTES.PRIVATE.SETTINGS_NOTIFICATIONS,
            },
            {
                title: "API Access",
                url: ROUTES.PRIVATE.SETTINGS_API,
            },
        ],
    },
];


// Export all constants as a single object if needed
export const CONSTANTS = {
    STORAGE_KEYS,
    ROUTES,
    VALIDATION,
    NAV_ITEMS,
} as const;

export type ApiEndpoints = typeof API_ENDPOINTS;
export type Routes = typeof ROUTES;