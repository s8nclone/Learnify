import React from 'react'
import './searchBar.css'
import searchIcon from '../../assets/search-icon.svg'

function SearchBar({className}) {
  return (
    <form className={`search-form ${className}`}>
        <input className="search-field" type="search" placeholder="what do you want to learn?" name="search" />
        <button type="submit"><img src={searchIcon} alt="search icon" className="search-icon"/></button>
    </form>
  )
}

export default SearchBar