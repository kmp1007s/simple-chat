import React from 'react';
import StyledTitleAndSummary from './TitleAndSummry.style';

import Title from '@atoms/Index/Title';
import Summary from '@atoms/Index/Summary';

function TitleAndSummary({ title, summary }) {
  return (
    <StyledTitleAndSummary>
      <Title italic color="white">
        {title}
      </Title>
      <Summary italic color="white">
        {summary}
      </Summary>
    </StyledTitleAndSummary>
  );
}

export default TitleAndSummary;
