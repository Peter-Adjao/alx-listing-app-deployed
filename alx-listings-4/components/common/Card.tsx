import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

interface PropertyProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  address: {
    city: string;
    country: string;
  };
}

const Card: React.FC<PropertyProps> = ({
  id,
  name,
  image,
  rating,
  price,
  address,
}) => {
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-md">
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="w-full h-50 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="flex items-center">
            <Image src="/assets/star.png" alt="Star" width={20} height={20} />
            <p className="ml-2 text-sm font-medium">{rating}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          {address.city}, {address.country}
        </p>

        <p className="text-sm font-semibold text-blue-600 mt-2">${price}</p>

        <div className="mt-4 flex gap-2">
          <Button label="Book Now" onClick={() => router.push(`/booking/${id}`)} />
          <Button label="Details" onClick={() => router.push(`/property/${id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
