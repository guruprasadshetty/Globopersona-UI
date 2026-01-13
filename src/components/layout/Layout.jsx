import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area (offset by sidebar width) */}
      <div className="ml-64 min-h-screen">
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
