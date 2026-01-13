export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 
                 h-16 flex items-center justify-between 
                 px-6 bg-white/80 backdrop-blur 
                 border-b"
    >
      <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Welcome, Admin</span>
        <div
          className="w-9 h-9 rounded-full 
                        bg-gradient-to-r from-purple-500 to-indigo-500 
                        text-white font-bold flex items-center justify-center"
        >
          G
        </div>
      </div>
    </header>
  );
}
