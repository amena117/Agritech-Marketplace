// src/app/listings/page.tsx
import ProduceCard from "@/components/ProduceCard";

const dummyProduce = [
  {
    id: "1",
    crop: "Teff",
    variety: "Kuncho",
    quantity: 500,
    unit: "kg",
    priceRange: "ETB 2,800 - 3,200",
    location: "West Shewa, Ambo",
    farmerName: "Abebe Kebede",
    freshness: "Fresh" as const,
  },
  {
    id: "2",
    crop: "Coffee",
    variety: "Yirgacheffe",
    quantity: 120,
    unit: "kg",
    priceRange: "ETB 850 - 1,100",
    location: "East Hararghe, Dire Dawa",
    farmerName: "Fatuma Ahmed",
    freshness: "Dried" as const,
  },
  {
    id: "3",
    crop: "Maize",
    quantity: 2000,
    unit: "kg",
    priceRange: "ETB 1,400 - 1,700",
    location: "Jimma Zone, Omo Nada",
    farmerName: "Mohammed Ali",
    freshness: "Harvested recently" as const,
  },
  {
    id: "4",
    crop: "Barley",
    quantity: 800,
    unit: "kg",
    priceRange: "ETB 1,900 - 2,300",
    location: "Arsi Zone, Asella",
    farmerName: "Tigist Bekele",
    freshness: "Fresh" as const,
  },
  // Add more as you like...
];

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
          Available Produce in Oromiya
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Browse fresh teff, coffee, maize, barley, and more directly from farmers. 
          Prices and availability updated regularly.
        </p>
      </div>

      {/* Simple search/filter bar (placeholder – we'll make functional later) */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search crops (e.g., Teff, Coffee...)"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Filter
        </button>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyProduce.map((item) => (
          <ProduceCard key={item.id} {...item} />
        ))}
      </div>

      {/* Load more button placeholder */}
      <div className="mt-12 text-center">
        <button className="text-green-600 hover:text-green-800 font-medium">
          Load More Listings →
        </button>
      </div>
    </div>
  );
}