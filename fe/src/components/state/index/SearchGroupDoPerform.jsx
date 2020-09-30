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
      placeholder="검색할 방 이름을 입력해주세요!"
    />
  );
}

export default SearchGroupDoPerform;
