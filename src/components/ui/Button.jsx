export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
    >
      {children}
    </button>
  );
}
