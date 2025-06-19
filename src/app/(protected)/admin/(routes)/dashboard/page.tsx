// app/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
export default function Page() {
    return (
        <div className="flex min-h-screen flex-col p-6">
            <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Inventory Dashboard</h2>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Refresh
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}