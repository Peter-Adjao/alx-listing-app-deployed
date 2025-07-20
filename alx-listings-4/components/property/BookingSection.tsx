// components/property/BookingSection.tsx
import { useState } from "react";
import { differenceInDays, parseISO, isValid } from "date-fns";


const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getTotalPayment = (): number => {
    const inDate = parseISO(checkIn);
    const outDate = parseISO(checkOut);
    const isValidRange = isValid(inDate) && isValid(outDate) && outDate > inDate;

    if (!isValidRange) return 0;

    const nights = differenceInDays(outDate, inDate);
    return nights * price;
  };

  const total = getTotalPayment();

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border border-gray-300 p-2 w-full mt-1 rounded-md"
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border border-gray-300 p-2 w-full mt-1 rounded-md"
        />
      </div>

      {/* Total Payment */}
      <div className="mt-6 text-sm text-gray-700">
        <p>
          Total payment:{" "}
          <strong className="text-green-600">
            ${total > 0 ? total.toFixed(2) : "—"}
          </strong>
        </p>
      </div>

      {/* Reserve Button */}
      <button
        className={`mt-4 w-full py-2 px-4 rounded-md font-medium ${
          total > 0 ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={total === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
