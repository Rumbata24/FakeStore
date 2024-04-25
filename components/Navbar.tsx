"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const testSearch = ["riba", "con", "maikati"];

    const filterSearch = testSearch.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filterSearch);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <nav>
      <div className="search-bar">
        <input
          className="relative "
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={handleChange}
          placeholder="Search products..."
        />

        {suggestions?.length > 0 && (
          <ul>
            {suggestions?.map((item, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
