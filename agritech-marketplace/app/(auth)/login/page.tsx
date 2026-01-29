// src/app/(auth)/login/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-green-100 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-green-800">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600">
            Login to access the Oromiya Agri Marketplace
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Phone Number / Email Field */}
          <div className="space-y-2">
            <Label htmlFor="identifier">Phone Number or Email</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="e.g., +251912345678 or example@email.com"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password" // We'll create this later if needed
                className="text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
            size="lg"
          >
            Login
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Placeholder for future Google / Phone OTP buttons */}
          <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
            Continue with Google
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center text-sm text-gray-600 pt-2">
          Don't have an account?{" "}
          <Link href="/(auth)/register" className="text-green-600 hover:underline font-medium">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}