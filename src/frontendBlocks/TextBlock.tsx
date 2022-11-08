import React from 'react';
import styled from 'styled-components';

type Props = {
  content: string;
  title: string;
};

const Wrapper = styled.div`
  display: flex;

  h2 {
    flex: 50% 0 0;
    padding-right: 1em;
  }

  p {
    flex: 50% 0 0;
  }
`;

const TextBlock: React.FC<Props> = ({ content, title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{content}</p>
    </Wrapper>
  );
};

export default TextBlock;
