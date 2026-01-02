import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-xl h-screen p-6 fixed">
      <h1 className="text-2xl font-bold mb-10 text-purple-600">Globopersona</h1>

      <nav className="space-y-4">
        <Link to="/" className="block hover:text-purple-600">
          Dashboard
        </Link>
        <Link to="/campaigns" className="block hover:text-purple-600">
          Campaigns
        </Link>
        <Link to="/campaigns/create" className="block hover:text-purple-600">
          Create Campaign
        </Link>
      </nav>
    </div>
  );
}
