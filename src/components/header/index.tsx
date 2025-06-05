import { Link } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="w-full mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">WeWantWaste</h1>
        <nav className="hidden sm:flex gap-4 text-sm text-gray-600">
          <Link to="/gradiant" className="hover:text-blue-600 transition">
            Gradiant
          </Link>
          <Link to="simple" className="hover:text-blue-600 transition">
            Simple
          </Link>
        </nav>
      </div>
    </header>
  );
}
