import React from 'react'
import { FiSearch } from "react-icons/fi";
import {SearchContainer} from "./subCompStyles"

const Search = () => {
  return (
    <SearchContainer>
      <input type="search" placeholder='search' />
      <FiSearch style={{color: "#fff", fontSize: "14"}} />
    </SearchContainer>
  )
}

export default Search