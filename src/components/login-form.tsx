import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ROUTES } from "@/core/config/constants"
import { useState } from "react"
import { LuEye, LuEyeClosed } from "react-icons/lu";
export function LoginForm({
  className,
  onSubmit,
  ...props
}: React.ComponentPropsWithoutRef<"form"> & {
  onSubmit?: () => void
}) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit()
    }
  }
  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500">Enter your credentials to access your account</p>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="me@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <Input id="password" type={showPassword ? "text" : "password"} required />
            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-0 right-0" variant={"ghost"}>
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  )
}
