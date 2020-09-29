import React from 'react';
import shortid from 'shortid';

import AttenderContainer from '@organisms/chat/AttenderContainer';
import AttenderItem from '@molecules/chat/AttenderItem';

function AttenderContainerDoPerform({ attenders }) {
  return (
    <AttenderContainer>
      {attenders &&
        attenders.map((attender) => (
          <AttenderItem key={shortid.generate()} attender={attender} />
        ))}
    </AttenderContainer>
  );
}

export default AttenderContainerDoPerform;
