"use client";

import { OnSearch } from "@/types";
import { useState } from "react";

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
        style={{ marginBottom: "20px", padding: "10px", width: "75%" }}
      />
    </div>
  );
};

export default SearchBar;
