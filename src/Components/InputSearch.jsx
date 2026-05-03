"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
    const router = useRouter()
    const params = useSearchParams()
  const handlebtnSearch = (e) => {
    e.preventDefault();
    const form = e.target;
      const value = form.search.value;
    //   new search parametert set
      const newParams =new  URLSearchParams(params.toString())
      newParams.set('search', value)
      router.push(`?${newParams.toString()}`)
    // console.log(value);
  };
  return (
    <form onSubmit={handlebtnSearch}>
      {" "}
      <label className="input input-lg">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        {/* search input */}
        <input
          name="search"
          type="search"
          required
          placeholder="Search this Food"
        />
      </label>
      <button className="btn-btn ml-5">Search</button>
    </form>
  );
};

export default InputSearch;
