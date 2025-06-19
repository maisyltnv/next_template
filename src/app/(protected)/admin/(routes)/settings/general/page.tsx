import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import React from 'react'


export default function page() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>General</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Configure general settings for your application.
                    </CardDescription>
                    <div className="mt-6 grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Site Title
                            </label>
                            <Input type="text" className="mt-1 block w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Site Description
                            </label>
                            <Input type="text" className="mt-1 block w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Language
                            </label>
                            <Select >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Configure security settings for your application.
                    </CardDescription>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                </CardContent>
            </Card>
            <div className="col-span-1 lg:col-span-2">
                <Button type="submit" className="w-full">
                    Save Changes
                </Button>
            </div>
        </div>
    )
}

