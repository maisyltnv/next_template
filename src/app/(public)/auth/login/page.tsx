"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ROUTES, STORAGE_KEYS } from '@/core/config/constants';
import { toast } from 'sonner';
import { MessageCircleQuestion } from 'lucide-react';
import { LoginForm } from '@/components/login-form';
import Image from "next/image";
import BgAnimated from '@/components/shared/bg-animated';

export default function Page() {
    const router = useRouter();

    function handleLogin() {
        const toastId = toast.loading("Just a moment...", {
            description: "We're logging you in securely",
            richColors: true,
        });

        setTimeout(() => {
            Cookies.set(STORAGE_KEYS.ACCESS_TOKEN, "data.data.token.access_token");
            Cookies.set(STORAGE_KEYS.REFRESH_TOKEN, "data.data.token.refresh_token");
            toast.success("Logged in!", {
                id: toastId,
                description: "You have been logged in successfully.",
                richColors: true,
            });
            router.push(ROUTES.PRIVATE.DASHBOARD);
        }, 2000);
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Column - Login Form */}
            <div className="flex flex-col p-6 md:p-10 bg-white">
                <div className="flex justify-between items-center mb-6">
                    <a href={ROUTES.PUBLIC.HOME} className="flex items-center gap-3 font-semibold text-lg">
                        <Image
                            src="/logo.png"
                            alt="Branding Logo"
                            className="h-8 w-8"
                            width={1000}
                            height={1000}
                        />
                        <span className="">Branding</span>
                    </a>

                    <Button
                        onClick={() => {
                            window.open(`https://wa.me/8562077707792?text=${encodeURIComponent("ສະບາຍດີ🙏, ຂ້ອຍມີຄຳຖາມກ່ຽວກັບ Branding.")}`, "_blank");
                        }}
                        variant="outline"
                        size="sm"
                        className="md:hidden text-green-600 hover:text-green-800 hover:bg-green-50"
                    >
                        <MessageCircleQuestion className="w-6 h-6" />
                    </Button>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md space-y-8">
                        <LoginForm onSubmit={handleLogin} />
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Branding. All rights reserved.
                    </p>
                </div>
            </div>

            <div className="hidden lg:block relative overflow-hidden h-screen">
                {/* Base gradient background */}
                <BgAnimated />

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
                    <div className="mb-8 flex flex-col items-center">
                        <Image
                            src="/logo.png"
                            alt="Branding Logo"
                            className="h-32 w-32 mb-6 drop-shadow-lg"
                            width={1000}
                            height={1000}
                        />
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Welcome to Branding
                        </h1>
                        <p className="text-md text-green-100 max-w-md mx-auto">
                            <span className="font-semibold">Branding</span> is a comprehensive enterprise resource planning software designed to streamline your business operations.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-6 w-full max-w-xl">
                        {[
                            { title: "Easy to Use", description: "Intuitive interface designed for maximum productivity" },
                            { title: "Full Integration", description: "Seamlessly connects all your business processes" },
                            { title: "24/7 Support", description: "Our team is always ready to assist you" }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-green-100 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute right-6 top-6">
                    <Button
                        onClick={() => {
                            window.open(`https://wa.me/8562077707792?text=${encodeURIComponent("ສະບາຍດີ🙏, ຂ້ອຍມີຄຳຖາມກ່ຽວກັບ Branding.")}`, "_blank");
                        }}
                        variant="outline"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 hover:text-white"
                    >
                        <MessageCircleQuestion className="w-5 h-5 mr-2" />
                        <div>
                            <p className="text-md">Need help?</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}