import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox')
  return (
    <div className="pa4">
      <input
        className="pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="Search Names" 
        onChange= { searchChange }
      />
    </div>
  );
}


export default SearchBox;

