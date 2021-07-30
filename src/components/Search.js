// libraries
import React from "react";

function Search({searchValue, onChangeSearchInput, clearInput}) {
  return (
    <div className="flex items-center justify-between px-10 mb-10">
      {/* left side */}
      <div className="font-bold text-3xl pr-2 truncate">
        {searchValue ? `Поиск по запросу: "${searchValue}"` : "Вся техника"}
      </div>
      {/* right side */}
      <div className="relative flex items-center">
        <div className="absolute pl-4">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          type="text"
          placeholder="Поиск..."
          className="outline-none border-2 border-custom-gray py-2 rounded-lg pl-10 pr-8"
        />
        {searchValue && (
          <svg
            onClick={clearInput}
            className="cursor-pointer absolute right-4"
            width="12"
            height="12"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5706 7.61551L6.15947 5.1667L8.57052 2.71798C9.50024 1.77374 8.05834 0.309319 7.12863 1.25356L4.71758 3.70228L2.30645 1.25348C1.37694 0.309443 -0.0649022 1.77381 0.86461 2.71785L3.27574 5.16665L0.864694 7.61537C-0.0650248 8.55962 1.37687 10.024 2.30658 9.07979L4.71763 6.63107L7.12876 9.07988C8.05839 10.024 9.50023 8.55966 8.5706 7.61551Z"
              fill="#B5B5B5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Search;
