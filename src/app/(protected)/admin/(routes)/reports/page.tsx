"use client";
import React from 'react'
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {
    Card,
    CardContent,
 
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    Package,
    AlertTriangle,
    DollarSign,
    Download,
    FileText,

} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
 
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

export default function Page() {
    const chartData = [
        { name: 'Main Warehouse', stockLevel: 1254 },
        { name: 'West Coast Hub', stockLevel: 876 },
        { name: 'East Distribution', stockLevel: 632 },
        { name: 'Central Storage', stockLevel: 945 },
        { name: 'South Facility', stockLevel: 421 },
    ];
    const trendData = [
        { month: 'Nov', inbound: 210, outbound: 180 },
        { month: 'Dec', inbound: 340, outbound: 270 },
        { month: 'Jan', inbound: 280, outbound: 250 },
        { month: 'Feb', inbound: 320, outbound: 290 },
        { month: 'Mar', inbound: 450, outbound: 380 },
        { month: 'Apr', inbound: 380, outbound: 340 },
    ];
    const inventoryItems = [
        { id: 1, name: 'Wireless Keyboard', sku: 'KB-001', category: 'Peripherals', quantity: 123, reorderLevel: 25 },
        { id: 2, name: 'Monitor 24"', sku: 'MON-240', category: 'Displays', quantity: 45, reorderLevel: 15 },
        { id: 3, name: 'USB Cables', sku: 'USB-100', category: 'Accessories', quantity: 320, reorderLevel: 50 },
        { id: 4, name: 'Laptop Stands', sku: 'LS-200', category: 'Accessories', quantity: 89, reorderLevel: 20 },
        { id: 5, name: 'Wireless Mouse', sku: 'MS-001', category: 'Peripherals', quantity: 12, reorderLevel: 30 },
    ];

    return (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="flex items-center p-6">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <Package className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Items in Stock</p>
                            <h3 className="text-2xl font-bold">4,128</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center p-6">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <AlertTriangle className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Low Stock Items</p>
                            <h3 className="text-2xl font-bold">12</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center p-6">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <DollarSign className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Stock Value</p>
                            <h3 className="text-2xl font-bold">$342,568</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Stock Levels by Warehouse</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="stockLevel" fill="#3b82f6" name="Items" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Stock Movement Over Time</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={trendData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="inbound" stroke="#10b981" name="Inbound" />
                                    <Line type="monotone" dataKey="outbound" stroke="#f43f5e" name="Outbound" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Inventory Table */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Inventory Items</CardTitle>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Export CSV
                        </Button>
                        <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            Export PDF
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item Name</TableHead>
                                <TableHead>SKU</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Reorder Level</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inventoryItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>{item.sku}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.reorderLevel}</TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.quantity > item.reorderLevel * 2
                                            ? 'bg-green-100 text-green-800'
                                            : item.quantity <= item.reorderLevel
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {item.quantity > item.reorderLevel * 2
                                                ? 'In Stock'
                                                : item.quantity <= item.reorderLevel
                                                    ? 'Low Stock'
                                                    : 'Medium Stock'}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t px-6 py-4">
                    <div className="text-sm text-slate-500">
                        Showing 5 of 127 items
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" disabled>
                            Previous
                        </Button>
                        <Button variant="outline" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
