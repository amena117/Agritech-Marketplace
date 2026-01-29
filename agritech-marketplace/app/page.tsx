// src/app/page.tsx

import { Button } from "@/components/ui/button";  // only if shadcn is working

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Welcome to thunder Agri Marketplace
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting farmers and buyers in Ethiopia – starting soon!
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Get Started
        </Button>
      </div>
    </main>
  );
}