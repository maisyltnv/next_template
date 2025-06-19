import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Manage Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex justify-between">
                        <Input placeholder="Search users..." className="w-1/3" />
                        <Button>Add New User</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


