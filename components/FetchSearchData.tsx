"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const [products, setProducts] = useState<any[]>([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    const value = event?.target.value;
    setInputValue(value);

    const filteredData = products
      .filter((suggest) =>
        suggest.title.toLowerCase().includes((value as string).toLowerCase())
      )
      .slice(0, 5);

    setSuggested(filteredData);
  };

  const selectSuggest = (suggest: string) => {
    setInputValue(suggest.title);
    setSuggested([]);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggested([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section>
      <div className="relative m-5">
        <div className="flex items-center">
          <input
            className="relative outline-none p-4 outline-offset-0 text-white bg-slate-600 border-none rounded border-slate-600 min-w-[500px]"
            type="text"
            name=""
            id=""
            placeholder="Search products..."
            value={inputValue}
            onChange={handleChange}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            style={{ fill: "white" }}
            className="absolute right-2 cursor-pointer"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>

        {suggested.length > 0 && (
          <ul
            ref={dropdownRef}
            className="absolute mt-1 bg-slate-600  text-white border-none rounded border-gray-300"
          >
            {suggested.map((item, index) => (
              <li
                key={index}
                onClick={() => selectSuggest(item)}
                className="p-4 min-w-[500px] border-none rounded border-gray-300 hover:text-slate-100 hover:bg-slate-500 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Navbar;
