const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-1 border rounded-full text-sm bg-gray-100 hover:bg-blue-100">
    {label}
  </button>
);

export default Pill;