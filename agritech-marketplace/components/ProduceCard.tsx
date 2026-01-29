// src/components/ProduceCard.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // We'll add this component next

interface ProduceCardProps {
  id: string;
  crop: string;
  variety?: string;
  quantity: number;
  unit: string; // e.g., "kg", "quintal", "sack"
  priceRange: string; // e.g., "ETB 1,200 - 1,500"
  location: string; // e.g., "West Shewa, Ambo"
  farmerName: string;
  imageUrl?: string; // placeholder for now
  freshness?: "Fresh" | "Dried" | "Harvested recently";
}

export default function ProduceCard({
  id,
  crop,
  variety,
  quantity,
  unit,
  priceRange,
  location,
  farmerName,
  imageUrl = "/placeholder-produce.jpg", // we'll add real images later
  freshness = "Fresh",
}: ProduceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-green-100">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={imageUrl}
          alt={`${crop} from ${location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-600">
          {freshness}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-green-800">
          {crop} {variety ? `(${variety})` : ""}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Quantity:</span>
          <span className="font-medium">{quantity.toLocaleString()} {unit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Price range:</span>
          <span className="font-bold text-green-700">{priceRange}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Location:</span>
          <span>{location}</span>
        </div>
        <div className="text-gray-500 text-xs mt-2">
          Posted by: {farmerName}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
          Contact Seller
        </Button>
      </CardFooter>
    </Card>
  );
}