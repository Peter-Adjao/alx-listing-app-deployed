import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "villa-ocean-breeze",
    name: "Villa Ocean Breeze",
    description: "Luxurious villa with panoramic ocean views and a calming breeze throughout.",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/farmers.jpg",
    discount: "30",
    reviews: [],
    host: {
      name: "Ketut",
      bio: "Local host who loves surfing and sharing Bali’s hidden gems."
    }
  },
  {
    id: "mountain-escape-chalet",
    name: "Mountain Escape Chalet",
    description: "Rustic chalet tucked in the hills, perfect for cozy winter getaways.",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/naomi.jpg",
    discount: "30",
    reviews: [],
    host: {
      name: "Emma",
      bio: "Mountain guide and adventure enthusiast."
    }
  },
  {
    id: "cozy-desert-retreat",
    name: "Cozy Desert Retreat",
    description: "Warm and welcoming desert home ideal for peaceful stargazing nights.",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/assets/webaliser.jpg",
    discount: "",
    reviews: [],
    host: {
      name: "Lana",
      bio: "Lover of sunsets and desert flora."
    }
  },
  {
    id: "city-lights-penthouse",
    name: "City Lights Penthouse",
    description: "Sleek penthouse with sweeping skyline views and modern amenities.",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "/assets/gudak.jpg",
    discount: "15",
    reviews: [],
    host: {
      name: "Jordan",
      bio: "Urban explorer and rooftop enthusiast."
    }
  },
  {
    id: "riverside-cabin",
    name: "Riverside Cabin",
    description: "Quaint cabin perched beside a river, perfect for kayakers and nature lovers.",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "/assets/john.jpg",
    discount: "20",
    reviews: [],
    host: {
      name: "Kai",
      bio: "Nature guide with a passion for water sports."
    }
  }
  // Repeat for the remaining properties...
];
