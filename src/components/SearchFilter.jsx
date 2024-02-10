import { useState } from "react";
import DropDown from "./DropDown";
import { IoIosSearch } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const SearchFilter = ({ search }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    search(input);
  };

  return (
    <section className="container flex sm:items-center sm:justify-between sm:flex-row flex-col items-start pt-5">
      <div className="w-[100%] sm:w-96 px-3 py-2 flex items-center gap-3 rounded-sm text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 shadow-md hover:bg-slate-200  hover:dark:bg-slate-600">
        <IoIosSearch />
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a country"
            name=""
            id=""
            className="w-[100%] bg-transparent focus:border-0 focus:outline-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>

      <DropDown />
    </section>
  );
};

export default SearchFilter;
