import React, { useCallback, useState } from 'react';
import SearchGroup from '@molecules/index/SearchGroup';

function SearchGroupDoPerform({ openRooms, setSearchedRooms }) {
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setInputValue(e.target.value);

      if (openRooms) {
        const searchedRooms = openRooms.filter((openRoom) =>
          openRoom.includes(e.target.value)
        );
        setSearchedRooms(searchedRooms);
      }
    },
    [openRooms, setSearchedRooms]
  );

  return (
    <SearchGroup
      type="text"
      onChange={onChange}
      value={inputValue}
    ></SearchGroup>
  );
}

export default SearchGroupDoPerform;
