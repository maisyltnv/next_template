"use client";
import { Settings2, Users, Bell, Key, Database, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from "@/core/config/constants";
import Link from "next/link";
export default function Page() {

    const settingsCategories = [
        {
            title: "General",
            description: "Manage your account settings and preferences",
            url: ROUTES.PRIVATE.SETTINGS_GENERAL,
            icon: Database,
        },
        {
            title: "Users & Roles",
            description: "Manage user accounts and role permissions",
            url: ROUTES.PRIVATE.SETTINGS_USERS,
            icon: Users,
        },
        {
            title: "Notifications",
            description: "Configure your notification preferences",
            url: ROUTES.PRIVATE.SETTINGS_NOTIFICATIONS,
            icon: Bell,
        },
        {
            title: "API Access",
            description: "Manage API keys and access tokens",
            url: ROUTES.PRIVATE.SETTINGS_API,
            icon: Key,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
                <Settings2 className="h-6 w-6 mr-2" />
                <h1 className="text-3xl font-bold">Settings</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {settingsCategories.map((category) => (
                    <Link
                        key={category.title}
                        href={category.url}
                        className="block group transition-all hover:no-underline"
                    >
                        <Card className="h-full group-hover:shadow-md transition-all">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <div className="flex items-center">
                                    <div className="mr-3 bg-primary/10 p-2 rounded-md text-primary">
                                        <category.icon className="h-5 w-5" />
                                    </div>
                                    <CardTitle>{category.title}</CardTitle>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{category.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}