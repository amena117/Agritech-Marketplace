// src/app/(auth)/register/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-green-100 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-green-800">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Join Oromiya Agri Marketplace today
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="e.g., Abebe Kebede"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+251912345678"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Email (optional for now) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="border-green-200 focus-visible:ring-green-500"
            />
          </div>

          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
            size="lg"
          >
            Create Account
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center text-sm text-gray-600 pt-2">
          Already have an account?{" "}
          <Link href="/(auth)/login" className="text-green-600 hover:underline font-medium">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}