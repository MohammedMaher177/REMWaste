import { Grid, List } from "lucide-react";

interface Props {
  viewType: "card" | "list";
  setViewType: (view: "card" | "list") => void;
}

export default function ViewSwitcher({ viewType, setViewType }: Props) {
  const handleChange = (view: "card" | "list") => {
    setViewType(view);
    localStorage.setItem("viewType", view);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-purple-800/50 rounded-lg p-1 flex">
        <button
          onClick={() => {
            handleChange("card");
          }}
          className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${
            viewType === "card"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-purple-200 hover:text-white"
          }`}
        >
          <Grid className="w-4 h-4 mr-2" />
          Cards
        </button>
        <button
          onClick={() => {
            handleChange("list");
          }}
          className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${
            viewType === "list"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-purple-200 hover:text-white"
          }`}
        >
          <List className="w-4 h-4 mr-2" />
          List
        </button>
      </div>
    </div>
  );
}
