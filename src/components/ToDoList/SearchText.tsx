import React, { useState, useRef } from "react";

interface SearchTextProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchText: React.FC<SearchTextProps> = ({ setSearchInput }) => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const inputRefSearchText = useRef<HTMLInputElement>(null);

  const handleClickFocusSearch = () => {
    if (inputRefSearchText.current !== null) {
      inputRefSearchText.current.focus();
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchInputValue(value);
    setSearchInput(value);
  };

  return (
    <div>
      <h1>Search</h1>
      <div className="field" onClick={handleClickFocusSearch}>
        <input
          type="text"
          placeholder="Enter your search item.."
          ref={inputRefSearchText}
          value={searchInputValue}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};