import { useState } from "react";
import { PropertyProps } from "@/interfaces";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const tabs = ["What we offer", "Reviews", "About host"];
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div className="container mx-auto p-6">
      {/* Title & Location */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="text-yellow-500 font-medium">
          {property.rating} stars
        </span>
        <span>|</span>
        <span>{property.address?.city}, {property.address?.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {property.images?.slice(0, 4).map((imgUrl, index) => (
          <img
            key={index}
            src={String(imgUrl)}
            alt={`property-${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Tabs Navigation */}
      <div className="mt-8">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-green-500 text-green-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "What we offer" && (
            <div>
              <p className="text-lg text-gray-700">{property.description}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                <ul className="flex flex-wrap gap-2">
                  {Array.isArray(property.category) &&
                    property.category.map((amenity, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-600"
                      >
                        {amenity}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <ReviewSection propertyId={property.id} />
          )}

          {activeTab === "About host" && (
            <div>
              <h3 className="text-xl font-semibold">Meet Your Host</h3>
              <p className="mt-2 text-gray-700">{property.host?.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
