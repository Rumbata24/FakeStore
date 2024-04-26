"use client";

import React, { useState } from "react";

const Navbar = () => {
  // Goal auto complete search bar

  // when we write something into the input, dropdown box with suggested completed searches
  // - create input
  // - the input should take the values (provided by the user)
  // - search or filter the value from the suggestedDataBase
  // - display the suggestedData into a box (the dropdown)
  // - make it clickable, so we can route the search
  // When we click on the input, show last searches

  const [inputValue, setInputValue] = useState<string>("");
  const [suggested, setSuggested] = useState<string[]>([]);

  const suggestedData = [
    "planche",
    "workout",
    "training",
    "maltese",
    "front level",
  ];

  const handleChange = (event: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    const value = event?.target.value;
    setInputValue(value);

    const filteredData = suggestedData.filter((suggest) =>
      suggest.toLowerCase().includes(value as string)
    );

    setSuggested(filteredData);
  };

  const selectSuggest = (suggest: string) => {
    setInputValue(suggest);
    setSuggested([]);
  };

  return (
    <nav>
      <div className="relative m-5">
        <input
          className="relative outline-none p-4 outline-offset-0 text-white bg-slate-600 border-none rounded border-slate-600 w-[254px]"
          type="text"
          name=""
          id=""
          placeholder="Search products..."
          value={inputValue}
          onChange={handleChange}
        />
        {suggested.length > 0 && (
          <ul className="absolute mt-1 bg-slate-600  text-white border-none rounded border-gray-300">
            {suggested.map((item, index) => (
              <li
                key={index}
                onClick={() => selectSuggest(item)}
                className="p-4 w-[254px] border-none rounded border-gray-300 hover:text-slate-100 hover:bg-slate-500 cursor-pointer"
              >
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
