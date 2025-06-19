import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600">
                        Configure your notification preferences here.
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="email" className="ml-2 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="sms" className="ml-2 block text-sm font-medium text-gray-700">
                                SMS
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="push" className="ml-2 block text-sm font-medium text-gray-700">
                                Push Notifications
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

