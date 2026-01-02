export default function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input {...props} className="w-full p-2 border rounded mt-1" />
    </div>
  );
}
