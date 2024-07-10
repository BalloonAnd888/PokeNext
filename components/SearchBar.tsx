"use client";

import { useState } from "react";
import { OnSearch } from "@/types";

const SearchBar = ({ onSearch }: OnSearch) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={handleInputChange}
        className="searchBar"
      />
    </div>
  );
};

export default SearchBar;
